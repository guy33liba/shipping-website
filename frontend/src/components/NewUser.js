import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Home from "./Home"
import Contexts from "./Contexts"
const NewUser = () => {
  const { newUser, handleStateChange } = useContext(Contexts)
  const [users, setUsers] = useState([])
  const createUser = async () => {
    const { data } = await axios.post("/users", {
      newUser,
    })
    setUsers(data)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createUser()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => handleStateChange(newUser.name, e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => handleStateChange(newUser.email, e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            value={newUser.password}
            onChange={(e) => handleStateChange(newUser.password, e.target.value)}
            placeholder="password"
          />
        </div>
        <label>
          <input
            type="checkbox"
            checked={newUser.isAdmin}
            onChange={(e) => handleStateChange(newUser.name, e.target.value)}
          />
          Is Admin
        </label>
        <button type="submit" onClick={createUser}>
          Create User
        </button>
      </form>
    </div>
  )
}
export default NewUser
