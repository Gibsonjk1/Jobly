import React from "react"
import "./Home.css"

function Home({currUser, token, checkAuth}){
   let message = checkAuth(token)? currUser : "Stranger"
    return(
        <div className="center">   
            <h1>
                Jobly
            </h1>
            <p> All the Jobs in one, convenient place</p>
            <h2>Welcome {message}</h2>
        </div>
    )
}

export default Home;