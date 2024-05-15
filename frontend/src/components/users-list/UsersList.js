import axios from "axios"
import React, { useEffect, useState } from "react"

const UsersList = () => {
  const [userList, setuserList] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("/users")
      setuserList(data)
    }
    fetchUsers()
  }, [])

  return (
    <div>
      {userList.map((user) => {
        return <div>{user.name}</div>
      })}
    </div>
  )
}

export default UsersList
