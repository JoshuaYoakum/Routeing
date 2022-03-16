import React from 'react'
import {useParams} from "react-router"

const Word = () => {
    const {word} = useParams()
    console.log(word)
  return (
    <fieldset>
    <legend> Word.jsx</legend>
    {isNaN(word)?<h1>Your word is {word}</h1>:<h1>Your number is {word}</h1>}
    </fieldset>
  )
}

export default Word