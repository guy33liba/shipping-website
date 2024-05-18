import React, { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
  const [products, setProducts] = useState([])
  const [users, setusers] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/products")
      setProducts(data)
    }
    const getUsersList = async () => {
      const { data } = await axios.get("/users")
      setusers(data)
    }
    getProducts()
    getUsersList()
  }, [])

  return (
    <div>
      <div style={{ display: "flex", width: "100vw" }}>
        <div style={{}} className="prodcutsContainer">
          {products.map((product) => (
            <div key={product._id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>

        <div className="usersList">
          {users?.map((user) => (
            <div>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
