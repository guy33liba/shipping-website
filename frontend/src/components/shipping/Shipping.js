import React, { useContext } from "react"
import { allStatesContexts } from "../Contexts"

const Shipping = () => {
  const { newShipping } = useContext(allStatesContexts)
  return (
    <div>
      <div>
        <div>
          <input type="text" placeholder="" />
        </div>
        <div>
          <input type="text" placeholder="" />
        </div>
        <div>
          <input type="text" placeholder="" />
        </div>
        <div>
          <input type="text" placeholder="" />
        </div>
      </div>
    </div>
  )
}

export default Shipping
