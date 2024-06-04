import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Jome = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const postItem = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/api/items`, {
        name,
        description,
      })
      setItems([...items, data]) // Add the new item to the existing list
      setName("") // Clear the input fields
      setDescription("") // Clear the input fields
    } catch (err) {
      setError(err.message)
    }
  }
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items")
        console.log(response.data)
        setItems(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Items</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      </div>
      <div>
        <input
          placeholder="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <ul>
        {items.map((item) => (
          <div>
            <li key={item._id}>
              <Link to={`/item/${item._id}`}>{item.name}</Link>
            </li>
          </div>
        ))}
      </ul>
      <button onClick={postItem}>add item</button>
    </div>
  )
}

export default Jome
