import React from "react"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
          <ol>
            <Link to="/products">Home</Link>
          </ol>
          <ol>
            <Link to="/register">Register </Link>
          </ol>{" "}
          <ol>
            <Link to="/shipping">shipping Form </Link>
          </ol>{" "}
          <ol>
            <Link to="/shipments">shipments list </Link>
          </ol>
          <ol>
            <Link to="/users">Users List </Link>
          </ol>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
