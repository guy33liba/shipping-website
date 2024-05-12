import React, { useContext, useEffect, useState } from "react"
import { allStatesContexts } from "../Contexts"
import "./Shipping.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Shipping = () => {
  const navigate = useNavigate()

  const { newShipment, handleShippingChange } = useContext(allStatesContexts)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [shippiments, setShippments] = useState([])
  const createShipping = async () => {
    try {
      const { data } = await axios.post("/shipments", { newShipment, paymentMethod })
      handleShippingChange(null, null, data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createShipping()
    navigate("/shippments")
  }
  useEffect(() => {
    const getShippments = async () => {
      const { data } = await axios.get("/shipments")
      setShippments((prev) => ({ ...prev, data }))
    }
    getShippments()
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="shippingInputs">
          <div>
            <input
              type="text"
              value={newShipment.address}
              placeholder="address"
              onChange={(e) => handleShippingChange("address", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={newShipment.city}
              placeholder="city"
              onChange={(e) => handleShippingChange("city", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={newShipment.postalCode}
              placeholder="postalCode"
              onChange={(e) => handleShippingChange("postalCode", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={newShipment.country}
              placeholder="country"
              onChange={(e) => handleShippingChange("country", e.target.value)}
            />
          </div>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            {/* Add more payment methods as needed */}
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Shipping
