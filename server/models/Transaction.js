import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransactionScheme = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionScheme);

export default Transaction;
