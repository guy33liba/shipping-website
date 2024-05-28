import React, { useState } from "react"

const SingleItem = () => {
  const [singleItem, setSingleItem] = useState({
    name: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    countInStock: "",
  })
  return <div>SingleItem</div>
}

export default SingleItem
