import React, { createContext, useState } from "react"
import NewUser from "./NewUser"

const allStatesContext = createContext()
const Contexts = ({ children }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  })
  const handleStateChange = (key, value) => {
    setNewUser((prev) => ({ ...prev, [key]: value }))
  }
  return (
    <allStatesContext.Provider value={(newUser, handleStateChange)}>
      {children}
    </allStatesContext.Provider>
  )
}

export default Contexts
