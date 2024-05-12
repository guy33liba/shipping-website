import React, { useContext, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import "./NewUser.css"
import { useNavigate } from "react-router-dom"
const NewUser = () => {
  const navigate = useNavigate()

  const { newUser, handleUsersChange, users } = useContext(allStatesContexts)
  const createUser = async () => {
    try {
      const { data } = await axios.post("/users", newUser)
      handleUsersChange(null, null, data)
    } catch (error) {
      console.error("Error creating user:", error)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createUser()
    navigate("/shipping")
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="inputs">
        <div>
          <div>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => handleUsersChange("name", e.target.value)}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => handleUsersChange("email", e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={newUser.password}
              onChange={(e) => handleUsersChange("password", e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="checkbox">
          <div>Is Admin</div>
          <input
            type="checkbox"
            checked={newUser.isAdmin}
            onChange={(e) => handleUsersChange("isAdmin", e.target.checked)}
          />

          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
  )
}

export default NewUser
