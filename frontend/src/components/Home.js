import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { allStatesContexts } from "./Contexts"
const Home = () => {
  const [products, setProducts] = useState([])
  const [users, setusers] = useState([])
  const { singleItem, handleSingleItem } = useContext(allStatesContexts)

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/products")
      setProducts(data)
    }
    const getUsersList = async () => {
      const { data } = await axios.get("/users")
      setusers([...data])
    }
    getProducts()
    getUsersList()
  }, [])
  const navigate = useNavigate()
  const getSingleProduct = async (id) => {
    const { data } = await axios.post(`/product`, singleItem)
    const singleItem = data.filter((item) => item._id === id)
    handleSingleItem(singleItem)
    console.log(singleItem)
    navigate(`/singleItem`)
  }
  return (
    <div>
      <div style={{ display: "flex", width: "100vw" }}>
        <div className="prodcutsContainer">
          {products.map((product, index) => (
            <div key={product._id}>
              <img
                src={product.image}
                alt={product.name}
                onClick={() => getSingleProduct(product._id)}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        <div className="usersList">
          {users?.map(({ register }) => (
            <div>
              <div>{register.name}</div>
              <div>{register.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
