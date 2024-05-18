import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { allStatesContexts } from "./Contexts"
const NavBar = () => {
  const { toggle, handleToggle } = useContext(allStatesContexts)
  console.log(toggle)
  return (
    <div className={toggle ? "navbar" : "displaying"}>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around", width: "20%" }}>
          <ol>
            <Link to="/">Home</Link>
          </ol>
          <ol>
            <Link to="/shipping">shipping Form </Link>
          </ol>{" "}
          <ol>
            <Link to="/shipments">shipments list </Link>
          </ol>
          <ol>
            <Link to="/users">Users List </Link>
          </ol>
          <ol style={{ marginLeft: "60rem" }} onClick={handleToggle}>
            <Link to="/login">Login </Link>
          </ol>
          <ol>
            <Link to="/register">Register </Link>
          </ol>{" "}
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
