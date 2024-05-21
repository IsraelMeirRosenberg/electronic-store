import mongoose, { connect } from "mongoose";
export const connectToMongo = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return console.log('connectd mongo');

        }
        await connect(process.env.MONGO_URI)
        console.log('connect to mongo');
    } catch (error) {
        console.log('error connect to mongo', error);
    }
}