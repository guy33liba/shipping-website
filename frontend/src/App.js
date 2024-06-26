import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Contexts from "./components/Contexts"
import Shipping from "./components/shipping/Shipping"
import Register from "./components/register/Register"
import UsersList from "./components/users-list/UsersList"
import ShipmentsList from "./components/shipments/ShipmentsList"
import Login from "./components/login/Login"
import SingleItem from "./components/single-item/SingleItem"
import Cart from "./components/cart/Cart"
import "./App.css"
const App = () => {
  return (
    <Contexts>
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/shipments" element={<ShipmentsList />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singleItem/:id" element={<SingleItem />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Contexts>
  )
}

export default App
