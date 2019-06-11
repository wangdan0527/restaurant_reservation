const Table = require('./model')

module.exports = {

  async list(ctx) {
    console.log("TEst");
    const { skip, limit } = ctx.query

    const users = await Table.list({ skip, limit })

    ctx.body = users
  },

  async register(ctx) {
    // const { body } = ctx.request
    const tables = await Table.list()

    table = new Table()
    table.id = tables.length
    table.restaurantId = 0
    await table.save()
    ctx.status = 201

    ctx.body = { result : "success" }
  }

}
