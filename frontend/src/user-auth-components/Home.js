import React, { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const Home = () => {
  const { authState, logout } = useContext(AuthContext)

  return (
    <div>
      <h1>Home</h1>
      {authState.isAuthenticated ? (
        <div>
          <h2>Welcome, {authState.user && authState.user.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h2>Please log in or register.</h2>
      )}
    </div>
  )
}

export default Home
