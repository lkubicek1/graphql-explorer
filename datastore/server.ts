import * as jsonServer from 'json-server';
import * as path from 'path';
import * as fs from 'fs';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const dbPath = path.join(__dirname, 'db.json');
if (!fs.existsSync(dbPath)) {
    console.error("Error: 'db.json' not found. Please generate the data first.");
    process.exit(1);
}

const router = jsonServer.router(dbPath);

server.use(middlewares);
server.use(router);

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});