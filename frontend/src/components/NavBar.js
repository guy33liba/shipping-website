import React from "react"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
          <ol>
            <Link to="/">Home</Link>
          </ol>
          <ol>
            <Link to="/cart">Cart</Link>
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
