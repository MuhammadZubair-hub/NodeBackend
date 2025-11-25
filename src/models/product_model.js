import mongoose from 'mongoose'


const productSechma = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Ladies', 'Gents'],
        required: true,
    },
    clothType: {
        type: String,
        enum: ['Wool', 'Cotton', 'Lone'],
        required: true,
    },
    quantity: {
        type: Number,
        defaul: 0,
        required: true,
    },
    priceLevel: {
        type: String,
        enum: ['High', 'Low'],
        required: true,
    },
    purchasePrice: Number,
    sellingPrice: Number
}, { timestamps:true })

export const Product =  mongoose.model('Product', productSechma)