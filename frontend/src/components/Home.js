import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
const Home = () => {
  const [products, setProducts] = useState([])
  const [users, setusers] = useState([])
  const [checkBox, setCheckBox] = useState([])
  const location = useLocation()
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
  const handleCheckBox = (index) => {
    setCheckBox((prevCheckBox) => {
      const newCheckBox = [...prevCheckBox]
      newCheckBox[index] = !newCheckBox[index]
      return newCheckBox
    })
  }

  return (
    <div>
      <div style={{ display: "flex", width: "100vw" }}>
        <div className="prodcutsContainer">
          {products.map((product, index) => (
            <div key={product._id}>
              <label className="checkboxLabel">
                {checkBox[index] === true ? "Checked" : "Not Checked"}
              </label>

              <input
                type="checkbox"
                checked={checkBox[index]}
                className="checking"
                onChange={() => handleCheckBox(index)}
              />
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        {console.log(checkBox)}

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
