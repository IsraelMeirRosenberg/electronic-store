import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
export const categoryModel = mongoose.models.categories || mongoose.model('categories', categorySchema) 