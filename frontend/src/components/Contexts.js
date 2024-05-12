import React, { createContext, useState } from "react"

export const allStatesContexts = createContext()

const Contexts = ({ children }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  })

  const [newShippment, setNewShippment] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })
  const handleUsersChange = (key, value, newList) => {
    setNewUser((prev) => ({ ...prev, [key]: value }))
    setUsers(newList)
  }
  const handleShippingChange = (key, value, newList) => {
    setNewUser((prev) => ({ ...prev, [key]: value }))
    setNewShippment(newList)
  }
  const [users, setUsers] = useState("hello")

  return (
    <allStatesContexts.Provider
      value={{ newShippment, newUser, handleShippingChange, handleUsersChange, users }}>
      {children}
    </allStatesContexts.Provider>
  )
}

export default Contexts
