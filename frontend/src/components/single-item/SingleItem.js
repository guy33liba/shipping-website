// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs"
// import { useLocation, useParams } from "react-router-dom"
// const SingleItem = () => {
//   const [singleItems, setsingleItems] = useState([])
//   const { id } = useParams()
// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating)
//   const halfStar = rating % 1 !== 0
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
//   return (
//     <>
//       {[...Array(fullStars)].map((_, index) => (
//         <BsFillStarFill key={`full-${index}`} />
//       ))}
//       {halfStar && <BsStarHalf />}
//       {[...Array(emptyStars)].map((_, index) => (
//         <BsStar key={`empty-${index}`} />
//       ))}
//     </>
//   )
// }

//   const getSingleProduct = (id) => {
//     const { data } = axios.get(`/product/${id}`)
//     console.log(data)
//   }
//   useEffect(() => {
//     getSingleProduct()
//   })
//   const {
//     state: {
//       brand,
//       category,
//       countInStock,
//       createdAt,
//       description,
//       image,
//       name,
//       numReviews,
//       price,
//       rating,
//     },
//   } = useLocation()
//   console.log({
//     brand,
//     category,
//     countInStock,
//     createdAt,
//     description,
//     image,
//     name,
//     numReviews,
//     price,
//     rating,
//   })
//   return (
// <div>
//   <img src={image} alt="" />
//   <div>{category}</div>
//   <div>{countInStock}</div>
//   <p>{description}</p>
//   <div>{name}</div>
//   <p>{numReviews}</p>
//   <h2 className="stars">{renderStars(rating)}</h2>

//   <div>{price}</div>
// </div>
//   )
// }

// export default SingleItem
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs"

const ProductDetails = () => {
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

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/product/${id}`)
        setProduct(response.data)
        setLoading(false)
      } catch (err) {
        console.log("hello")
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div className="singleItem">
        <img src={product.image} />
        <h3>Name: {product.name}</h3>
        <h3>category: {product.category}</h3>
        <h3>countInStock: {product.countInStock}</h3>
        <div>
          <h3>description: </h3>
          {product.description}
        </div>
        <h3>{product.numReviews}</h3>
        <h2 className="stars">{renderStars(product.rating)}</h2>

        <div>{product.price}</div>
      </div>
    </div>
  )
}

export default ProductDetails
