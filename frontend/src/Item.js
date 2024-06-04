import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Item = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/items/${id}`)
        if (isMounted) {
          console.log(response.data.name)
          setItem(response.data)
        }
      } catch (err) {
        if (isMounted) {
          console.log(err)
          setError(err.message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }
    fetchItem()

    return () => {
      isMounted = false
    }
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div>{item.name}</div>
      <div>{item.description}</div>
    </div>
  )
}

export default Item
