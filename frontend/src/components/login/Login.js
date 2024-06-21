import React, { useContext, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
  const navigate = useNavigate()
  const { login, setLogin } = useContext(allStatesContexts)

  const handleLogin = (key, value) => {
    setLogin((prev) => ({ ...prev, [key]: value }))
  }

  const loginPost = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/login", { login })
      const { accessToken, userId } = response.data
      console.log("Login successful:", accessToken)
      await fetchSingleUser(userId) // Use userId from the login response
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message)
    }
  }

  const fetchSingleUser = async (id) => {
    try {
      const { data } = await axios.get(`/users/${id}`)
      console.log("Fetched user data:", data)
      setLogin((prev) => ({ ...prev, name: data }))
      navigate("/")
    } catch (error) {
      console.error("Fetching user failed:", error.response?.data || error.message)
    }
  }

  return (
    <div>
      <form onSubmit={loginPost}>
        <div className="loginForm">
          <h1
            style={{
              textAlign: "center",
              border: "2px solid black",
              borderRadius: "20px",
              width: "200px",
              position: "fixed",
              left: "45%",
              backgroundColor: "white",
            }}
          >
            Login Page
          </h1>
          <div className="loginInputs">
            <div style={{ marginTop: "30px" }}>
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
            </div>
            <button type="submit">Login Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
