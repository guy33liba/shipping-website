import axios from "axios"
import React, { useEffect, useState } from "react"
import "./UsersList.css"
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
    <div className="userContainer">
      {userList.map(({ register }, index) => {
        return (
          <div className="userListContainer" key={index}>
            <div>
              <div style={{ margin: "20px" }}>
                <h2>User Name : {register.name}</h2>
                <h2>Email : {register.email}</h2>
                <h2 style={{}}>Password : {register.password}</h2>
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
