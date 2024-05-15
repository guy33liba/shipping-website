import React, { useContext, useState } from "react"
import "./OrdersList.css"
import { allStatesContexts } from "../Contexts"
import axios from "axios"
const OrdersList = () => {
  const { handleCreateOrderChange, order, review } = useContext(allStatesContexts)
  const createProductOrder = async () => {
    try {
      const { data } = await axios.post("/shipments", {
        order,
        review,
      })
      handleCreateOrderChange({ newList: data })
    } catch (error) {
      console.log(error.message)
    }
  }
  return <div></div>
}

export default OrdersList
