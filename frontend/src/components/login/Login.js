import React, { useContext, useEffect, useState } from "react"
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
    const { data } = await axios.post("/login", { login })
    console.log(data)
    // navigate("/")
  }
  const fetchSingleUser = async (id) => {
    const { data } = await axios.get(`/users/${id}`)
    console.log(data)
    setLogin(data)
    navigate("/")
  }
  useEffect(() => {}, [])
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
            {/* <div>
              <input
                type="text"
                value={login.name}
                onChange={(e) => handleLogin("name", e.target.value)}
                placeholder="Name"
              />
            </div> */}
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

            <button
              onClick={(e) => {
                loginPost(e)
                fetchSingleUser(login.name)
              }}
            >
              Login Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
