import React, { useState } from "react"

const Cart = () => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  // const handleCheckBox = (index) => {
  //   setCheckBox((prevCheckBox) => {
  //     const newCheckBox = [...prevCheckBox]
  //     newCheckBox[index] = !newCheckBox[index]
  //     return newCheckBox
  //   })
  //   <input
  //   type="checkbox"
  //   checked={checkBox[index]}
  //   className="checking"
  //   onChange={() => handleCheckBox(index)}
  // />
  // }

  return <div>Cart</div>
}

export default Cart
