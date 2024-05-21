import { create_cat_controller, readOne_cat_controller, read_cat_controller, update_cat_controller } from "@/server/DL/controllers/category.controller";

export const create_cat_services = (data) => create_cat_controller(data)
export const read_cat_services = (filter) => read_cat_controller(filter)
export const readOne_cat_services = (id) => readOne_cat_controller(id)
export const update_cat_services = (id, data) => update_cat_controller(id, data)


