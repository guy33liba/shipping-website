import React from "react"

const Newcard = ({ item, getSingleProduct, renderStars }) => {
  return (
    <div>
      <div key={item._id}>
        <img src={item.image} alt={item.name} onClick={() => getSingleProduct(item)} />
        <h2 className="stars">{renderStars(item.rating)}</h2>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
    </div>
  )
}

export default Newcard
