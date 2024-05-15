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
    setUsers([newList])
  }
  const handleShippingChange = (key, value, newList) => {
    setNewShipment((prev) => ({ ...prev, [key]: value }))
    setShipments([newList])
  }
  const [users, setUsers] = useState([])
  const [shipments, setShipments] = useState([])

  return (
    <allStatesContexts.Provider
      value={{
        newShipment,
        register,
        handleShippingChange,
        handleUsersChange,
        shipments,
        users,
      }}
    >
      {children}
    </allStatesContexts.Provider>
  )
}

export default Contexts
