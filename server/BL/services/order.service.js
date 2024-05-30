import { createOrder_controller, readOrder_controller, putOrder_controller } from "@/server/DL/controllers/order.controller"

export const createOrder_service = (data) => {
    return createOrder_controller(data)
}
export const readOrder_service = (filter) => {
    return readOrder_controller(filter)
}
export const putOrder_service = (id, data) => {
    return putOrder_controller(id, data)
}