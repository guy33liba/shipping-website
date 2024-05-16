import React, { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
  const [products, setProducts] = useState([])
  const [users, setusers] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/products")
      console.log(data)
      setProducts(data)
    }
    const getUsersList = async () => {
      const { data } = await axios.get("/users")
      console.log(data)
      setusers(data)
    }
    getProducts()
    getUsersList()
  }, [])

  return (
    <div>
      <div style={{ display: "flex", width: "100vw" }}>
        <div style={{ border: "1px solid black", width: "100%" }}>
          <div className="prodcutsContainer">
            {products.map((product) => (
              <div key={product._id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: "1px solid black", width: "500px" }}>
          {users?.map((user) => (
            <div style={{ display: "flex", justifyContent: "start" }}>
              <div style={{ width: "100px" }}>{user.name}</div>
              <div style={{ marginLeft: "20px", width: "200px" }}>{user.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
