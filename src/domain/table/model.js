const mongoose = require('mongoose')
const { Schema } = mongoose

const TableSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    restaurantId: {
      type: Number,
      required: true
    }
  }
)

TableSchema.statics = {
  getById(id) {
    return this.findById(id).exec()
  },

  list({ skip = 0, limit = 20 } = {}) {
    return this.find({}, { id: 1})
      .sort({ createdAt: -1 })
      .exec()
  }
}

module.exports = mongoose.model('Table', TableSchema)
