import mongoose from 'mongoose'


const OrderItemSechma = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number,
    unitSalePrice: Number,
    total: Number,
});

const OrderSchma = new mongoose.Schema({
    items: [OrderItemSechma],
    totalAmount: Number
}, { timestamps: true });


export const Order = mongoose.model('Order', OrderSchma);
