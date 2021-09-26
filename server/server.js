const http = require('http')
const { promises } = require('fs')
const path = require('path')

const PORT = 9000 || process.env.PORT

const contentTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.ico': 'image/x-icon'
};

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function staticFileHandler(req, res) {
  const fileName = req.url === '/' ? path.join(__dirname, './index.html') : path.join(__dirname, req.url)

  const fileExtension = path.extname(fileName);

  if (fileExtension) {
    promises.readFile(fileName)
      .then(fileContent => {
        res.writeHead(200, { 'Content-Type': contentTypes[fileExtension] });
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
