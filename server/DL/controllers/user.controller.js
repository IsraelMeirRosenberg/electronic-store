import { userModel } from "../models/user.model"

export const createUser_controller = (data) => userModel.create(data)
export const putUser_controller = (id, data) => userModel.findByIdAndUpdate(id, data, { new: true })
export const readUser_controller = (filter) => userModel.findOne(filter)