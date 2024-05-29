import axios from "axios"
import React, { useEffect, useState } from "react"

const UsersList = () => {
  const [userList, setuserList] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("/users")
      console.log(data)
      setuserList([...data])
    }
    fetchUsers()
  }, [])
 
  return (
    <div>
      {userList.map(({ register }, index) => {
        return (
          <div key={index}>
            <div
              style={{ border: "1px solid black", marginLeft: "20px", width: "400px" }}
            >
              <div style={{ marginLeft: "20px" }}>
                <h2>User Name : {register.name}</h2>
                <h2>Email : {register.email}</h2>
                <h2>Password : {register.password}</h2>
                <h2>IsAdmin : {register.isAdmin ? "yes" : "no"}</h2>
              
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList
