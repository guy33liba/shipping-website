export const shipments = []
const Shipments = () => {
  return (
    <div>
      <h1>Shipments</h1>
      {shipments.map((shipment) => (
        <div key={shipment.id}>
          <h2>{shipment.address}</h2>
          <p>{shipment.city}</p>
          <p>{shipment.postalCode}</p>
          <p>{shipment.country}</p>
        </div>
      ))}
    </div>
  )
}

export default Shipments
