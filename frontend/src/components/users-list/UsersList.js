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
              style={{ border: "1px solid black", width: "400px", marginLeft: "20px" }}
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
