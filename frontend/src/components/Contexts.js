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
  const handleStateChange = (key, value, usersList) => {
    setNewUser((prev) => ({ ...prev, [key]: value }))
    setUsers(usersList)
  }
  const [users, setUsers] = useState("hello")

  return (
    <allStatesContexts.Provider value={{ newShippment, newUser, handleStateChange, users }}>
      {children}
    </allStatesContexts.Provider>
  )
}

export default Contexts
