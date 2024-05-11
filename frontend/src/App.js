import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NewUser from "./components/NewUser"
import Contexts from "./components/Contexts"

const App = () => {
  return (
    <Contexts>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<NewUser />} />
        </Routes>
      </Router>
    </Contexts>
  )
}

export default App
