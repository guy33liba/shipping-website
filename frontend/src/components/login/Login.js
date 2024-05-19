import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import { useNavigate } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const navigate = useNavigate()

  const { login, handleLogin } = useContext(allStatesContexts)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const loginStorage = async (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
    const { data } = await axios.post("/login", { login })
    setUser(data)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/login")
  }
  return (
    <div>
      <div className="loginForm">
        <h1
          style={{
            textAlign: "center",
            border: "2px solid black",
            borderRadius: "20px",
            width: "200px",
            position: "fixed",
            left: "45%",
          }}>
          Login Page
        </h1>
        <form className="loginInputs">
          <div>
            <div>
              <input
                type="text"
                value={login.username}
                onChange={(e) => handleLogin("username", e.target.value)}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                value={login.email}
                onChange={(e) => handleLogin("email", e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                value={login.password}
                onChange={(e) => handleLogin("password", e.target.value)}
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
