import React from "react"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          position: "absolute",
          position: "absolute",
          left: "60%",
        }}>
        <ul
          style={{
            display: "flex",
          }}>
          <ol>
            <Link to="/">Home</Link>
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
