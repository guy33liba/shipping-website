import React, { useState, useEffect } from "react"
import axios from "axios"

const Shipments = () => {
  const [shipments, setShipments] = useState([])

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const { data } = await axios.get("/shipments")
        setShipments([...data])
        console.log(data)
      } catch (error) {
        console.error("Error fetching shipments:", error.message)
      }
    }

    fetchShipments()
  }, [])

  return (
    <div>
      <h1>Shipments</h1>
      {Array(shipments).map((shipment, index) => (
        <div key={index}>
          <h4>Address : {shipment.address}</h4>
          <h4>City : {shipment.city}</h4>
          <h4>Postal Code : {shipment.postalCode}</h4>
          <h4>Country : {shipment.country}</h4>
          <h2>Payment Method : {shipment.paymentMethod}</h2>
        </div>
      ))}
    </div>
  )
}

export default Shipments
