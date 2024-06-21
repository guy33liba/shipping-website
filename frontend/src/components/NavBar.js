import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { allStatesContexts } from "./Contexts"
const NavBar = () => {
  const { toggle, handleToggle } = useContext(allStatesContexts)
  return (
    <div className="navbar">
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around", width: "20%" }}>
          <ol>
            <Link to="/">Home</Link>
          </ol>
          <ol>
            <Link to="/shipping">shipping Form </Link>
          </ol>
          <ol>
            <Link to="/shipments">shipments list </Link>
          </ol>
          <ol>
            <Link to="/users">Users List </Link>
          </ol>
          <ol style={{ marginLeft: "40rem" }}>
            <Link to="/login">Login </Link>
          </ol>
          <ol>
            <Link to="/register">Register </Link>
          </ol>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
