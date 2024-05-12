import React, { useContext } from "react"
import { allStatesContexts } from "../Contexts"

const Shipping = () => {
  const { newShipping } = useContext(allStatesContexts)
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  )
}

export default Shipping
