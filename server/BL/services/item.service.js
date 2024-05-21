const { createItem_controller, readOneItem_controller, putItem_controller,readItems_controller } = require("@/server/DL/controllers/item.controller")

export const createItem_service = async (data) => {
    await createItem_controller(data)
}
export const readItems_service = async (filter) => {
    await readItems_controller(filter)
}
export const readOneItem_service = async (id) => {
    await readOneItem_controller(id)
}
export const putItem_service = async (id,data) => {
    await putItem_controller(id,data)
}