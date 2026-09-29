// Local preview of the GitHub Pages export, including its production base path.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../out');
const prefix = '/Brightside-Dental';
const types = {'.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.ico':'image/x-icon', '.woff2':'font/woff2', '.mp4':'video/mp4', '.webm':'video/webm', '.xml':'application/xml', '.txt':'text/plain'};
if (!fs.existsSync(path.join(root, 'index.html'))) throw new Error('Run npm run build before npm start.');
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  if (pathname === '/') { res.writeHead(302, {Location: prefix + '/'}).end(); return; }
  if (pathname !== prefix && !pathname.startsWith(prefix + '/')) { res.writeHead(404).end(); return; }
  const relative = pathname.slice(prefix.length).replace(/^\/+/, '');
  const resolved = path.resolve(root, relative || 'index.html');
  if (resolved !== root && !resolved.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  const file = [resolved, resolved + '.html', path.join(resolved, 'index.html')].find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  const target = file || path.join(root, '404.html');
  res.writeHead(file ? 200 : 404, {'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'Cache-Control':'no-store'});
  fs.createReadStream(target).pipe(res);
}).listen(3100, '127.0.0.1', () => console.log('Preview: http://localhost:3100' + prefix + '/'));
