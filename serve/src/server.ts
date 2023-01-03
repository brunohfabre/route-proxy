import express from 'express'
import path from 'node:path'

const app = express()

function getPath(app: string) {
  return path.resolve(__dirname, '..', '..', app, 'dist')
}

app.use('/:app', (request, response, next) => {
  const { app } = request.params

  express.static(getPath(app))(request, response, next)
});

app.get('/:app/*', (request, response) => {
  const { app } = request.params

  return response.sendFile(path.join(getPath(app), 'index.html'))
})

app.get('*', (request, response) => {
  return response.send('no match')
})

app.listen(5001, () => console.log('serve on port 5001.'))