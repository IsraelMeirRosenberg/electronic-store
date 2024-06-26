import { createItem_controller, readOneItemWithLean_controller, readOneItem_controller, putItem_controller, readItems_controller, readItemsWithLean_controller } from "@/server/DL/controllers/item.controller"

export const createItem_service = async (data) => {
    data.name = data.name[0].toUpperCase() + data.name.slice(1, data.length)
    return await createItem_controller(data)
}
export const readItemsWithLean_service = async (filter) => {
    return await readItemsWithLean_controller(filter)
}
export const readItems_service = async (filter) => {
    return await readItems_controller(filter)
}
export const readOneItem_service = async (id) => {
    return await readOneItem_controller(id)
}
export const readOneItemWithLean_service = async (id) => {
    return await readOneItemWithLean_controller(id)
}
export const putItem_service = async (id, data) => {
    return await putItem_controller(id, data)
}