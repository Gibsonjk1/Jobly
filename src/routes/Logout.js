import React from "react"
import {Redirect} from 'react-router-dom'

function Logout({logout}){

    return (
        logout()
    )
}

export default Logout;