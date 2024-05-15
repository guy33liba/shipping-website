import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contexts from "./components/Contexts"
import Shipping from "./components/shipping/Shipping"
import Register from "./components/register/Register"
import Shipments from "./components/shipments/Shipments"
import UsersList from "./components/users-list/UsersList"
const App = () => {
  return (
    <Contexts>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/shipments" element={<UsersList />} />
        </Routes>
      </Router>
    </Contexts>
  )
}

export default App
