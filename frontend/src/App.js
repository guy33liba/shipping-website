import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contexts from "./components/Contexts"
import NewUser from "./components/new-user/NewUser"
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
