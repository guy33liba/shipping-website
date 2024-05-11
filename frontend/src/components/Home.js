import React, { useEffect, useState } from "react"
import axios from "axios"
import NewUser from "./NewUser"

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getExistingUsers = async () => {
      const { data } = await axios.get("/")
      setUsers(data)
    }
    getExistingUsers()
  }, [])

  return <div></div>
}

export default Home
