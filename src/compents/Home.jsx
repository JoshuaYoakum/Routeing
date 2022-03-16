import React from 'react'
import {useParams} from "react-router"

const Home = () => {
    const {home} = useParams()
    console.log(home)
    return(
        <fieldset>
            <h1>Welcome</h1>
        </fieldset>
    )
}
export default Home