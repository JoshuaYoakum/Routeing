import React from 'react'
import {useParams} from "react-router"

const Number = () => {
    const {number} = useParams()
    console.log(number)

  return (
    <fieldset>
        <legend> Number.jsx</legend>
        <h1>Your number is {number}</h1>
    </fieldset>
  )
}

export default Number