import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    }
    ,
    status: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    orders: [{ type: mongoose.Types.ObjectId, ref: "orders" }]
})

export const userModel = mongoose.models.users || mongoose.model("users", userSchema)