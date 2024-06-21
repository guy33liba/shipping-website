import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Shipments.css"
const ShipmentsList = () => {
  const [shipments, setShipments] = useState([])

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const { data } = await axios.get("/shipments")
        setShipments([...data])
        console.log()
      } catch (error) {
        console.error("Error fetching shipments:", error.message)
      }
    }

    fetchShipments()
  }, [])

  return (
    <div className="container">
      <h1>Shipments :</h1>
      {shipments.map(({ paymentMethod, shippingAddress }, index) => {
        return (
          <div
            key={index}
            style={{ border: "1px solid black", width: "30%", margin: "40px" }}
          >
            <div key={index} style={{ marginLeft: "20px", fontSize: "25px" }}>
              <p>Address : {shippingAddress.address}</p>
              <p>City : {shippingAddress.city}</p>
              <p>Postal Code : {shippingAddress.postalCode}</p>
              <p>Country : {shippingAddress.country}</p>
              <h3>Payment Method : {paymentMethod}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ShipmentsList
