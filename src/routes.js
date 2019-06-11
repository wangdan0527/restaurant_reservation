const Router = require('koa-router')
const router = new Router()
const api = new Router()

const tables = require('./domain/table/routes')

api.use(tables)

router.get('/', ctx => {
  ctx.body = 'OK'
})

router.use('/api', api.routes())

module.exports = router
