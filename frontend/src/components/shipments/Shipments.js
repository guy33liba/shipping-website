import React, { useState, useEffect } from "react"
import axios from "axios"

const Shipments = () => {
  const [shipments, setShipments] = useState([])

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const { data } = await axios.get("/shipments")
        setShipments([...data])
        console.log([...data])
      } catch (error) {
        console.error("Error fetching shipments:", error.message)
      }
    }

    fetchShipments()
  }, [])

  return (
    <div>
      <h1>{}</h1>
      {shipments.map(({ paymentMethod, shippingAddress }, index) => {
        return (
          <div key={index}>
            <h3>Address : {shippingAddress.address}</h3>
            <h3>City : {shippingAddress.city}</h3>
            <h3>Postal Code : {shippingAddress.postalCode}</h3>
            <h3>Country : {shippingAddress.country}</h3>
            <h2>Payment Method : {paymentMethod}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Shipments
