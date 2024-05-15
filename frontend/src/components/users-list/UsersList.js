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
      {userList.map((user, index) => {
        console.log(user)
        return (
          <div key={index}>
            <div style={{}}>
              <h2>User Name:: {user.name}</h2>
              <h2>email:: {user.email}</h2>
              <h2>password: {user.password}</h2>
              <h2>isAdmin: {user.isAdmin.toString()}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList
