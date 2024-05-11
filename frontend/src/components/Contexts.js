import React, { createContext, useState } from "react"

const allStatesContext = createContext()

const Contexts = ({ children }) => {
  const [users, setUsers] = useState([])

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
    <allStatesContext.Provider value={{ newUser, handleStateChange, setUsers }}>
      {children}
    </allStatesContext.Provider>
  )
}

export default Contexts
