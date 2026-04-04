import http from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.resolve(__dirname, '..', 'build');
const port = 3000;

const contentTypes = new Map([
    ['.html', 'text/html; charset=utf-8'],
    ['.js', 'application/javascript; charset=utf-8'],
    ['.css', 'text/css; charset=utf-8'],
    ['.json', 'application/json; charset=utf-8'],
    ['.svg', 'image/svg+xml'],
    ['.png', 'image/png'],
    ['.jpg', 'image/jpeg'],
    ['.jpeg', 'image/jpeg'],
    ['.webp', 'image/webp'],
    ['.ico', 'image/x-icon'],
    ['.txt', 'text/plain; charset=utf-8'],
    ['.xml', 'application/xml; charset=utf-8'],
    ['.map', 'application/json; charset=utf-8'],
    ['.woff', 'font/woff'],
    ['.woff2', 'font/woff2'],
]);

function getSafeResolvedPath(urlPath) {
    const sanitized = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
    const filePath = path.resolve(buildDir, sanitized);

    if (!filePath.startsWith(buildDir)) {
        return null;
    }

    return filePath;
}

async function resolveFilePath(urlPath) {
    const directPath = getSafeResolvedPath(urlPath);

    if (!directPath) {
        return null;
    }

    if (existsSync(directPath)) {
        const fileStat = await stat(directPath);
        if (fileStat.isFile()) {
            return directPath;
        }
    }

    return path.join(buildDir, 'index.html');
}

const server = http.createServer(async (req, res) => {
    try {
        const filePath = await resolveFilePath(req.url ?? '/');

        if (!filePath) {
            res.statusCode = 400;
            res.end('Bad Request');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = contentTypes.get(ext) ?? 'application/octet-stream';
        res.setHeader('Content-Type', contentType);
        createReadStream(filePath).pipe(res);
    } catch {
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Static server running at http://127.0.0.1:${port}`);
});