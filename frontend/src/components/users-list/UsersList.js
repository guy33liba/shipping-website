import React, { useEffect } from "react"

const UsersList = () => {
  const [userList, setuserList] = useState([])
  useEffect(() => {
    const fetchUsers=async()=>{
        const {data}=await axios.get('')
    }
  }, [])

  return <div>UsersList</div>
}

export default UsersList
