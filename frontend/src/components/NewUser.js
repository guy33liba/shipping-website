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
  const usingHandleStateChange = (key, value) => {
    handleStateChange(key, value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <div>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => usingHandleStateChange("name", e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => usingHandleStateChange("email", e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={newUser.password}
            onChange={(e) => usingHandleStateChange("password", e.target.value)}
            placeholder="Password"
          />
        </div>
        <label>
          <input
            type="checkbox"
            checked={newUser.isAdmin}
            onChange={(e) => usingHandleStateChange("isAdmin", e.target.checked)}
          />
          Is Admin
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  )
}

export default NewUser
