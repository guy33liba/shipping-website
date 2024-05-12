import mongoose from "mongoose"

const shippingSchema = new mongoose.Schema(
  {
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
  },
  { timestamps: true }
)

const Shipping = mongoose.model("Shipping", shippingSchema)

export default Shipping
