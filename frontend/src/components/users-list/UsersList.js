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
      {userList?.map((user, index) => {
        console.log(user)
        return <div key={index}>{user.name}</div>
      })}
    </div>
  )
}

export default UsersList
