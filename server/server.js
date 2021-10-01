const http = require('http')
const { promises } = require('fs')
const path = require('path')
const mime = require('mime-types')

const PORT = process.env.PORT || 9000

const cacheFilesContent = {}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function staticFileHandler(req, res) {
  const fileName = req.url === '/' ? path.join(__dirname, './index.html') : path.join(__dirname, req.url)
  const contentType = mime.contentType(path.extname(fileName))

  if (cacheFilesContent[fileName]) {
    console.log(`${fileName} is served from cache`)
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(cacheFilesContent[fileName])
  } else {
    promises.readFile(fileName)
      .then(fileContent => {
        console.log(`${fileName} has been saved in the cache`)

        cacheFilesContent[fileName] = fileContent;
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(fileContent)
      })
      .catch(e => {
        console.log(e)
        if (e.code === 'ENOENT') {
          res.writeHead(404);
        } else {
          res.writeHead(500);
        }
        res.write(JSON.stringify(e));
        res.end()
      })
  }
}

(function (requests) {

  http.createServer((req, res) => {

    requests.forEach(handler => {
      handler(req, res)
    })

  }).listen(PORT, () => console.log(`App running at port http://localhost:${PORT}`))
})([
  staticFileHandler,
])

