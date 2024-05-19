import React, { useContext, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import "./Register.css"
import { useNavigate } from "react-router-dom"
const Register = () => {
  const navigate = useNavigate()

  const { register, handleUsersChange } = useContext(allStatesContexts)
  const createUser = async () => {
    console.log(register)
    try {
      const { data } = await axios.post("/users", { register })
      handleUsersChange({ newList: data })
    } catch (error) {
      console.error("Error creating user:", error)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createUser()
    navigate("/login")
  }
  console.log(register)
  return (
    <div>
      <form onSubmit={handleSubmit} className="inputs">
        <div>
          <div>
            <input
              type="text"
              value={register.name}
              onChange={(e) => handleUsersChange("name", e.target.value)}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              value={register.email}
              onChange={(e) => handleUsersChange("email", e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={register.password}
              onChange={(e) => handleUsersChange("password", e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="checkbox">
          <div>Is Admin</div>
          <input
            type="checkbox"
            checked={register.isAdmin}
            onChange={(e) => handleUsersChange("isAdmin", e.target.checked)}
          />

          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
  )
}

export default Register
