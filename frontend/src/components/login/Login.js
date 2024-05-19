import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import { useNavigate } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const navigate = useNavigate()

  const { login, handleLogin } = useContext(allStatesContexts)

  const loginPost = async () => {
    const { data } = await axios.post("/login", login)
    console.log(data)
    navigate("/")
  }
  useEffect(() => {}, [])
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
          }}
        >
          Login Page
        </h1>
        <div className="loginInputs">
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

          <button onClick={loginPost}>Login Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
