import React, { useState, useEffect } from "react"
import axios from "axios"

const Shipments = () => {
  const [shipments, setShipments] = useState([])

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const { data } = await axios.get("/shipments")
        setShipments(data)
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
          <p>Address: {shipment.address}</p>
          <p>City: {shipment.city}</p>
          <p>Postal Code: {shipment.postalCode}</p>
          <p>Country: {shipment.country}</p>
        </div>
      ))}
    </div>
  )
}

export default Shipments
