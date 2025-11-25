// import Product from "../models/product_model";

import { Ledger } from "../models/ledger_model.js";
import { Product } from "../models/product_model.js";
import { StockHistory } from "../models/stockhistory_model.js";
import { ApiError } from "../utils/ApiError.js";

export const addStock = async (req, res) => {

    try {
        const { category, clothType, quantity, priceLevel, purchasePrice, sellingPrice } = req.body;

        let product = await Product.findOne({ category, clothType, priceLevel });

        if (!product) {
            product = new Product({
                category,
                clothType,
                quantity,
                priceLevel,
                purchasePrice,
                sellingPrice
            });
        } else {
            product.quantity += quantity;
        }

        await product.save();

        await StockHistory.create({
            product: product._id,
            change: quantity,
            reason: "Restock"
        });
        const updateLedeger = await Ledger.create({
            type: "expense",
            amount: product.purchasePrice * product.quantity,
            date: new Date()
        });

        console.log('the update leder at at the time of adding product to stock : ', updateLedeger);

        res.status(201).json({ success: true, product })



    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


export const getProducts = async (req, res) => {

    // const {category} = req.params;
    // console.log('The cartogey ',category, req.params);
try {
    
    const product = await Product.find();
    console.log('THe exiting products are this ', product);
    res.send(product);
    

} catch (error) {
    // res.send(ApiError('invalid',false,[]))
    res.json(ApiError('sorry cant get this ',false,[]))
}
    // res.json(product);
}

export const deleteProducts = async (req, res) => {

    try {
        const { id } = req.body
        console.log('the id is : ', id);
        const product = await Product.deleteOne({_id: id});

        res.status(200).json({ success: true, message: 'Product Remove succesfully ', product });

    } catch (error) {

        res.status(500).json({ success: false, error: error.message });
    }


}