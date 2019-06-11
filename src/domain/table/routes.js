const Router = require('koa-router')
const controller = require('./controller')

const router = new Router()

router.get('/tables', controller.list)
router.post('/table', controller.register)

module.exports = router.routes()
