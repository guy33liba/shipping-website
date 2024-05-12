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
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })
  const handleUsersChange = (key, value, newList) => {
    setRegister((prev) => ({ ...prev, [key]: value }))
    setUsers(newList)
  }
  const handleShippingChange = (key, value) => {
    setNewShipment((prev) => ({ ...prev, [key]: value }))
  }
  const [users, setUsers] = useState([])

  return (
    <allStatesContexts.Provider
      value={{
        newShipment,
        register,
        handleShippingChange,
        handleUsersChange,
        users,
      }}
    >
      {children}
    </allStatesContexts.Provider>
  )
}

export default Contexts
