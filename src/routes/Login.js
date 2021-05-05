import React from "react"
import LoginForm from "../LoginForm"
import JoblyApi from '../api'



function Login({user}){
    async function data(formData){
        let token = await JoblyApi.login(formData)
        return user(formData, token);
        
    }

    return(
       <section>
           <h1>Login</h1>
           <LoginForm data={data}/>
       </section>
    )
}

export default Login;