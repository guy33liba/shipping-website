import React, { useState, useEffect } from "react"
import axios from "axios"

const Shipments = () => {
  const [shipments, setShipments] = useState([])

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const { data } = await axios.get("/shipments")
        setShipments([[...data]])
        console.log([...data])
      } catch (error) {
        console.error("Error fetching shipments:", error.message)
      }
    }

    fetchShipments()
  }, [])

  return (
    <div>
      <h1>Shipments</h1>
      {shipments.map((shipment, index) => (
        <div key={index}>
          <h3>Address : {shipment.address}</h3>
          <h3>City : {shipment.city}</h3>
          <h3>Postal Code : {shipment.postalCode}</h3>
          <h3>Country : {shipment.country}</h3>
          <h2>Payment Method : {shipment.paymentMethod}</h2>
        </div>
      ))}
    </div>
  )
}

export default Shipments
