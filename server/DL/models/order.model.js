import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    createdAt: {
        type: Date,
        default: Date.now
    },
    items: [{
        itemId: mongoose.Types.ObjectId, ref: "items",
        amount: { type: Number },
        price: { type: Number }
    }],
    totle: { type: Number },
})
export const orderModel = mongoose.models.orders || mongoose.model("orders", orderSchema)