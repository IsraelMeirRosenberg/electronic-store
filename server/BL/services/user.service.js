import { createUser_controller, readUser_controller, putUser_controller  } from "@/server/DL/controllers/user.controller"

export const createUser_service = (data) => {
    return createUser_controller(data)
}
export const readUser_service = (filter) => {
    return readUser_controller(filter)
}
export const putUser_service = (id, data) => {
    return putUser_controller(id, data)
}