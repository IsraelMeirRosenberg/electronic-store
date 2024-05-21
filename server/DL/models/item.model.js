import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Types.ObjectId, ref: "categories",
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    desc: {
        type: String,
    },
    isActive:{
        type:Boolean,
        default:true
    }
})
export const itemModel = mongoose.models.item || mongoose.model("item", itemSchema)