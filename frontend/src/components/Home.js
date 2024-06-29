import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { useLocation, useNavigate } from "react-router-dom"
import { allStatesContexts } from "./Contexts"
import Newcard from "./Newcard"
const Home = () => {
  const [products, setProducts] = useState([])
  const [users, setusers] = useState([])
  const { login, register } = useContext(allStatesContexts)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <BsFillStarFill key={`full-${index}`} />
        ))}
        {halfStar && <BsStarHalf />}
        {[...Array(emptyStars)].map((_, index) => (
          <BsStar key={`empty-${index}`} />
        ))}
      </>
    )
  }
  const navigate = useNavigate()
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/products")
      setProducts(data)
    }
    const getUsersList = async () => {
      const { data } = await axios.get("/users")
      console.log(data)
      setusers([...data])
    }
    getProducts()
    getUsersList()
  }, [])
  const getSingleProduct = (product) => {
    navigate(`/singleItem/${product._id}`, { state: { ...product } })
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> </h1>
      <div style={{ display: "flex", width: "100vw" }}>
        <div className="prodcutsContainer">
          {products.map((item, index) => (
            //   <div key={product._id}>
            //   <img
            //     src={product.image}
            //     alt={product.name}
            //     onClick={() => getSingleProduct(product)}
            //   />
            //   <h2 className="stars">{renderStars(product.rating)}</h2>
            //   <h2>{product.name}</h2>
            //   <p>{product.description}</p>
            //   <p>${product.price}</p>
            // </div>
            <Newcard
              item={item}
              getSingleProduct={getSingleProduct}
              renderStars={renderStars}
            />
          ))}
        </div>
        <div className="usersList">
          {users?.map(({ register, index }) => (
            <div key={index}>
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
