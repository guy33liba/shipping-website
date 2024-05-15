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
            <div
              style={{ display: "flex", justifyContent: "space-around", width: "300px" }}
            >
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
            </div>
            <div
              style={{ display: "flex", justifyContent: "space-around", width: "300px" }}
            >
              <h2>{user.password}</h2>
              <h2>{user.isAdmin.toString()}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList
