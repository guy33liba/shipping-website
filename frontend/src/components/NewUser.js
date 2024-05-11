import React, { useContext } from "react"
import axios from "axios"
import Contexts from "./Contexts"

const NewUser = () => {
  const { newUser, handleStateChange, setUsers } = useContext(Contexts)

  const createUser = async () => {
    try {
      const { data } = await axios.post("/users", {
        newUser,
      })
      setUsers(data)
    } catch (error) {
      console.error("Error creating user:", error)
    }
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
            onChange={(e) => handleStateChange("name", e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => handleStateChange("email", e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={newUser.password}
            onChange={(e) => handleStateChange("password", e.target.value)}
            placeholder="Password"
          />
        </div>
        <label>
          <input
            type="checkbox"
            checked={newUser.isAdmin}
            onChange={(e) => handleStateChange("isAdmin", e.target.checked)}
          />
          Is Admin
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  )
}

export default NewUser
