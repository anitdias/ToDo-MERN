const zod = require('zod');

const createTodoSchema = zod.object({
  title: String,
  description: String
})

const updateTodoSchema = zod.object({
  id:String
})

module.exports = {
  createTodoSchema,
  updateTodoSchema
}
