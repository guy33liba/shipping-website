import React, { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getExistingUsers = async () => {
      const { data } = await axios.get("/products")
      setProducts(data)
    }
    getExistingUsers()
  }, [])

  return <div></div>
}

export default Home
