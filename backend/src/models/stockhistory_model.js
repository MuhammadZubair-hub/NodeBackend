import mongoose from "mongoose";


const stockHistory = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    change: Number,
    reason: {
        type: String,
        enum: ['Sale', 'Restock']
    },
    refOrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }
}, { timeStamp: true });

export const StockHistory = mongoose.model('StockHistory', stockHistory);