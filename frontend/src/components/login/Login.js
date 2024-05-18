import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import { useNavigate } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const navigate = useNavigate()

  const { login, handleUsersChange } = useContext(allStatesContexts)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const loginStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <div>
      <div className="loginForm">
        <h1
          style={{
            textAlign: "center",
            border: "2px solid black",
            width: "200px",
            position: "fixed",
            left: "45%",
          }}
        >
          Login Page
        </h1>
        <form className="loginInputs">
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

            <button type="submit" onClick={loginStorage}>
              Login Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
