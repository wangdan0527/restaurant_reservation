require('should')
require('../../test_helper')
const Table = require('../../../src/domain/table/model')

describe('Table', () => {
  it('should create a table', async () => {
    const user = await new Table({
      id: 1,
      restaurantId: 1
    }).save()

  })
})
