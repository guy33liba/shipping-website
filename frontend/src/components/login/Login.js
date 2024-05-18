import React, { useContext, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import { useNavigate } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const navigate = useNavigate()

  const { login, handleUsersChange, handleToggle } = useContext(allStatesContexts)
  const createUser = async () => {
    try {
      const { data } = await axios.post("/login", login)
      handleUsersChange({ newList: data })
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
              value={login.name}
              onChange={(e) => handleUsersChange("name", e.target.value)}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              value={login.email}
              onChange={(e) => handleUsersChange("email", e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={login.password}
              onChange={(e) => handleUsersChange("password", e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit" onClick={handleToggle}>
            Login Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
