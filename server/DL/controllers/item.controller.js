import { itemModel } from "../models/item.model"


export const createItem_controller = async (data) => await itemModel.create(data)
export const readItemsWithLean_controller = async (filter) => await itemModel.find(filter).lean()
export const readItems_controller = async (filter) => await itemModel.find(filter)
export const readOneItem_controller = async (id) => await itemModel.findById(id)
export const readOneItemWithLean_controller = async (id) => await itemModel.findById(id).lean()
export const putItem_controller = async (id, data) => await itemModel.findByIdAndUpdate(id, data, { new: true })
