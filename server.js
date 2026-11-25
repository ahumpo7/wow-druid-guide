/**
 * WoW Forever - Unified Companion Server & Real-Time Auto-Syncer
 * 
 * Capabilities:
 * 1. HTTP Bridge (Port 3888) for the website & API (/api/sync, /api/status, /api/events).
 * 2. Real-time file watcher on WoW SavedVariables (WoWGuide.lua, BagBrother.lua, Questie.lua).
 *    Whenever you type /sync, /reload, or log out in-game, it syncs within milliseconds!
 * 3. Background periodic sync (every 20s) to catch remote updates from Computer B.
 * 4. Background git updater (every 60s) to keep in-game addon files up to date automatically.
 * 5. Server-Sent Events (SSE) so the web guide updates live without page refreshes!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3888;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Connected SSE clients for real-time live browser updates
const sseClients = new Set();

function broadcastSync(data) {
  const payload = `data: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(payload);
    } catch (_) {
      sseClients.delete(client);
    }
  }
}

// Dynamic runner to avoid stale require cache
async function executeSync(source = 'Manual') {
  try {
    delete require.cache[require.resolve('./sync')];
    const { runSync } = require('./sync');
    const result = await runSync();
    console.log(`[${new Date().toLocaleTimeString()}] [✓] Auto-sync success (${source})!`);
    broadcastSync({
      type: 'sync',
      source,
      syncedAt: new Date().toISOString(),
      character: result
    });
    return result;
  } catch (err) {
    console.error(`[${new Date().toLocaleTimeString()}] [!] Sync error (${source}):`, err.message);
    throw err;
  }
}

let debounceTimer = null;
function triggerSyncDebounced(source) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    executeSync(source).catch(() => {});
  }, 800);
}

// ---------------------------------------------------------------------------
// 1. SETUP GAME FILE WATCHERS
// ---------------------------------------------------------------------------
const candidateAccountDirs = [];
const driveRoots = ['C:', 'D:', 'E:', 'F:'];
const subPaths = [
  'Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account',
  'Program Files\\World of Warcraft\\_forever_\\WTF\\Account',
  'World of Warcraft\\_forever_\\WTF\\Account',
  'Games\\World of Warcraft\\_forever_\\WTF\\Account'
];

for (const drive of driveRoots) {
  for (const sp of subPaths) {
    const full = path.join(drive, '\\', sp);
    if (fs.existsSync(full)) candidateAccountDirs.push(full);
  }
}

const watchedDirs = [];
for (const accBase of candidateAccountDirs) {
  try {
    const entries = fs.readdirSync(accBase, { withFileTypes: true });
    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      const svDir = path.join(accBase, ent.name, 'SavedVariables');
      if (fs.existsSync(svDir)) {
        try {
          fs.watch(svDir, (eventType, filename) => {
            if (filename && (filename.includes('WoWGuide') || filename.includes('BagBrother') || filename.includes('Questie'))) {
              triggerSyncDebounced(`Game File: ${filename}`);
            }
          });
          watchedDirs.push(svDir);
        } catch (_) {}
      }
    }
  } catch (_) {}
}

console.log(`====================================================`);
console.log(` WoW Forever Companion & Live Auto-Syncer`);
console.log(` Real-time watchers active on ${watchedDirs.length} SavedVariables folder(s).`);
console.log(`====================================================`);

// ---------------------------------------------------------------------------
// 2. PERIODIC BACKGROUND TASKS
// ---------------------------------------------------------------------------
// A) Periodic Sync (every 20s): catches remote changes from Computer B or missed file events
setInterval(() => {
  executeSync('Periodic Cloud & Game Check').catch(() => {});
}, 20000);

// B) Background Addon Updater (every 60s): pulls latest code from GitHub origin/main
setInterval(() => {
  exec('git fetch origin main --quiet && git pull origin main --quiet', { cwd: __dirname }, (err) => {
    if (!err) {
      // If pull succeeds, addon files update seamlessly
    }
  });
}, 60000);

// ---------------------------------------------------------------------------
// 3. HTTP SERVER
// ---------------------------------------------------------------------------
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // SSE Live Stream Endpoint: /api/events
  if (url.pathname === '/api/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write(`data: ${JSON.stringify({ type: 'connected', time: new Date().toISOString() })}\n\n`);
    sseClients.add(res);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  // API Endpoint: /api/sync
  if (url.pathname === '/api/sync') {
    try {
      const syncResult = await executeSync('API Request');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        message: 'WoW game files synced successfully!',
        character: syncResult
      }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: false,
        error: err.message
      }));
    }
    return;
  }

  // API Endpoint: /api/status
  if (url.pathname === '/api/status') {
    let lastData = null;
    const jsonPath = path.join(__dirname, 'synced_character.json');
    if (fs.existsSync(jsonPath)) {
      try {
        lastData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      } catch (_) {}
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'online',
      port: PORT,
      watchedDirsCount: watchedDirs.length,
      activeClients: sseClients.size,
      lastSync: lastData ? lastData.syncedAt : null,
      activeCharacter: lastData ? lastData.activeCharacter : null
    }));
    return;
  }

  // Static File Server
  let reqPath = url.pathname;
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[✓] Live Companion Server listening at http://127.0.0.1:${PORT}`);
  console.log(`[✓] SSE live stream active at http://127.0.0.1:${PORT}/api/events`);
  // Trigger initial sync on server launch
  executeSync('Startup Initial Check').catch(() => {});
});
