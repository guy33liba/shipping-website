import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Item = () => {
  const { id } = useParams() // Assumes you are using react-router for routing
  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/items/${id}`)
        setItem(response.data)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchItem()
  }, [id])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!item) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default Item
