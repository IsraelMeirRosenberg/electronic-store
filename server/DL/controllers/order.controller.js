import { orderModel } from "../models/order.model"

export const createOrder_controller = (data) => orderModel.create(data)
export const putOrder_controller = (id, data) => orderModel.findByIdAndUpdate(id, data, { new: true })
export const readOrder_controller = (filter) => orderModel.findOne(filter)