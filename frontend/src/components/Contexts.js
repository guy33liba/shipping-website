import React, { createContext, useState } from "react"

export const allStatesContexts = createContext()

const Contexts = ({ children }) => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  })

  const [newShipment, setNewShipment] = useState({
    productName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })

  const [newReview, setNewReview] = useState({
    user: "",
    name: "",
    rating: "",
    comment: "",
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
  const handleLogin = (key, value, newList) => {
    setLogin((prev) => ({ ...prev, [key]: value }))
    setLogin([newList])
  }
  const [login, setLogin] = useState([])
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
        handleLogin,
        shipments,
        users,
        reviews,
        newReview,
        login,
      }}
    >
      {children}
    </allStatesContexts.Provider>
  )
}

export default Contexts
