import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { allStatesContexts } from "../Contexts"
import { useNavigate } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email: "",
    password: "",
  })
  const handleLogin = (key, value) => {
    setLogin((prev) => ({ ...prev, [key]: value }))
  }
  const loginPost = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("/login", { login })
    console.log(data)
    navigate("/")
  }
  useEffect(() => {}, [])
  return (
    <div>
<<<<<<< HEAD
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
=======
      <div className="loginForm">
        <h1
          style={{
            textAlign: "center",
            border: "2px solid black",
            borderRadius: "20px",
            width: "200px",
            position: "fixed",
            left: "45%",
            backgroundColor:'white'
          }}>
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
>>>>>>> 91760b485c94e4b1609c9411f98b296c837e24dc

            <button onClick={loginPost}>Login Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
