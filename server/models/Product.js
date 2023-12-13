import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductScheme = new Schema(
  {
    price: {
      type: Number,
    },
    expense: {
      type: Number,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductScheme);

export default Product;
