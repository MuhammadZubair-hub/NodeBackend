import mongoose from "mongoose";

const ledgerSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["expense", "deposit"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    note: String,
    date: {
        type: Date,
        default: Date.now
    }
});

export const Ledger = mongoose.model("Ledger", ledgerSchema);
