const { createServer } = require('http')
const next = require('next')
const pathMatch = require('path-match')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const userEditMatch = route('/users/:id/edit')

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)

    const params = userEditMatch(pathname)
    if (params) {
      app.render(req, res, '/users-edit', Object.assign(params, query))
      return
    }

    if (pathname.indexOf('_components') >= 0) {
      app.render(req, res, '/404wedontwanttoshowthisstuff')
      return
    }

    handle(req, res)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
