import { Ledger } from '../models/ledger_model.js';
import { Order } from '../models/order_model.js';
import { Product } from '../models/product_model.js'
import { StockHistory } from '../models/stockhistory_model.js'

export const addOrders = async (req, res) => {
  try {
    const { items } = req.body;

    console.log("the items receiving are: ", items);

    let totalAmount = 0;

    for (let item of items) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }

      if (product.quantity < item.quantity) {
        return res.status(400).json({ msg: "Not enough stock" });
      }

      
      product.quantity -= item.quantity;
      await product.save();

      item.total = item.quantity * item.unitSalePrice;
      totalAmount += item.total;

      // create stock history
      await StockHistory.create({
        product: item.product,
        change: -item.quantity,
        reason: "Sale",
      });
    }

    console.log("after loop, final items:", items);

    const updateLedeger = await Ledger.create({
      type :"deposit",
      amount :totalAmount,
      date : new Date()
    });

    console.log('updating ledger with these value : ', updateLedeger);

    
    const addedOrder = await Order.create({
      items: items,
      totalAmount: totalAmount,
    });

    return res.status(201).json({
      success: true,
      message: "Order Placed",
      addedOrder,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};



export const getPerviousOrder = async (req, res) => {
  const orders = await Order.find().populate("items.product");
  res.json(orders);
};