import React, { useContext } from "react"
import { allStatesContexts } from "../Contexts"
import "./Shipping.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Shipping = () => {
  const navigate = useNavigate()

  const { newShippment, handleShippingChange } = useContext(allStatesContexts)
  const createShipping = async () => {
    try {
      const { data } = await axios.post("/shippments", newShippment)
      handleShippingChange(null, null, data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createShipping()
    navigate("/shipping")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="shippingInputs">
          <div>
            <input
              type="text"
              value={newShippment.address}
              placeholder="address"
              onChange={(e) => handleShippingChange("address", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={newShippment.address}
              placeholder="city"
              onChange={(e) => handleShippingChange("city", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={newShippment.address}
              placeholder="postalCode"
              onChange={(e) => handleShippingChange("postalCode", e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={newShippment.address}
              placeholder="country"
              onChange={(e) => handleShippingChange("country", e.target.value)}
            />
          </div>
          <button type="submit"> new shipping</button>
        </div>
      </form>
    </div>
  )
}
export default Shipping
