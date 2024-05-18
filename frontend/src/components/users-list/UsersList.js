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
        return (
          <div key={index}>
            <div
              style={{ border: "1px solid black", marginLeft: "20px", width: "500px" }}
            >
              <div style={{ marginLeft: "20px" }}>
                <h2>User Name : {user.name}</h2>
                <h2>Email : {user.email}</h2>
                <h2>Password : {user.password}</h2>
                <h2>IsAdmin : {user.isAdmin.toString()}</h2>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList
