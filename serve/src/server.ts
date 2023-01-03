import express from 'express'
import path from 'node:path'

const app = express()

const basePath = path.resolve(__dirname, '..', '..', 'app-01', 'dist')

app.use('/app-01', express.static(basePath));

app.get('/*', (request, response) => {
  return response.sendFile(path.join(basePath, 'index.html'))
})

app.listen(8001, () => console.log('serve on port 8001.'))