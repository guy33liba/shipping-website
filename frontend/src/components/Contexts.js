import React, { createContext, useState } from "react"

export const allStatesContexts = createContext()

const Contexts = ({ children }) => {
  const [newShipment, setNewShipment] = useState({
    productName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })
  const [singleItem, setSingleItem] = useState({
    name: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    countInStock: "",
  })
  const [newReview, setNewReview] = useState({
    user: "",
    name: "",
    rating: "",
    comment: "",
  })
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  })
  const handleUsersChange = (key, value, newList) => {
    setRegister((prev) => ({ ...prev, [key]: value }))
    setUsers([newList])
  }
  const handleShippingChange = (key, value, newList) => {
    setNewShipment((prev) => ({ ...prev, [key]: value }))
    setShipments([newList])
  }

  const handleReviewChange = (key, value, newList) => {
    setNewReview((prev) => ({ ...prev, [key]: value }))
    setReviews([newList])
  }
  const handleSingleItem = (key, value, newList) => {
    setSingleItem(value)
  }
  const [users, setUsers] = useState([])
  const [shipments, setShipments] = useState([])
  const [reviews, setReviews] = useState([])
  return (
    <allStatesContexts.Provider
      value={{
        newShipment,
        register,
        handleShippingChange,
        handleUsersChange,
        handleReviewChange,
        handleSingleItem,
        shipments,
        users,
        reviews,
        newReview,
        singleItem,
      }}
    >
      {children}
    </allStatesContexts.Provider>
  )
}

export default Contexts
