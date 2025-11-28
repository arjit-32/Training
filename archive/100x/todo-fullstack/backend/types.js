const zod = require('zod')

const TodoValidator = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean().default(false)
})

const updateTodoValidator = zod.object({
    title: zod.string().optional(),
    description: zod.string().optional(),
    completed: zod.boolean()
})

const TodoParam = zod.string()


module.exports = {
    TodoValidator,
    updateTodoValidator,
    TodoParam
}