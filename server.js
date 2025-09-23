import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

// For SPA: serve index.html for all routes (Express v5+)
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
