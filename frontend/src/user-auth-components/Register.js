import React, { useState, useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { register } = useContext(AuthContext)

  const { name, email, password } = formData

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    register(formData)
  }

  return (
    <divdiv>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} required />
        <input type="email" name="email" value={email} onChange={onChange} required />
        <input type="password" name="password" value={password} onChange={onChange} required />
      </form>
    </divdiv>
  )
}
export default Register
