// Serves public/ and src/ with no build step.
import http from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const port = Number(process.env.PORT ?? 3000)
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }

http.createServer(async (req, res) => {
  const path = req.url === '/' ? '/public/index.html' : req.url.split('?')[0]
  try {
    const body = await readFile(join(process.cwd(), path))
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'text/plain' }).end(body)
  } catch {
    res.writeHead(404).end()
  }
}).listen(port, () => console.log('web-app on http://localhost:' + port))
