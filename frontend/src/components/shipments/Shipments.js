import React, { useState, useEffect } from "react";
import axios from "axios";

const Shipments = () => {
  const [shipp, setShipp] = useState([]);

  const fetchShipments = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/shipments");
      setShipp(data);
    } catch (error) {
      console.error("Error fetching shipments:", error.message);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  return (
    <div>
      <h1>Shipments</h1>
      {shipp.map((shipment, index) => (
        <div key={index}>
          <p>{shipment.address}</p>
          <p>{shipment.city}</p>
          <p>{shipment.postalCode}</p>
          <p>{shipment.country}</p>
        </div>
      ))}
      <button onClick={fetchShipments}>Refresh Shipments</button>
    </div>
  );
};

export default Shipments;
