import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        organizer: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        location: { type: String, required: true },
        price: { type: Number, required: true },
        ticketsStock: { type: Number, required: true },
        categories: { type: Array, required: true }
}, {
    timestamps: true
})

const Products = mongoose.model('Products', productSchema)
export default Products