import { categoryModel } from "../models/category.model";
export const read_cat_controller = (filter) => categoryModel.find(filter)
export const readOne_cat_controller = (id) => categoryModel.findById(id)
export const create_cat_controller = (data) => categoryModel.create(data)
export const update_cat_controller = (id, data) => categoryModel.findByIdAndUpdate(id, data, { new: true })