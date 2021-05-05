import React from "react"
import SignupForm from '../SingupForm'
import JoblyApi from '../api'


function Signup({user}){
    async function data(formData){
       let token = await JoblyApi.signup(formData)
       return user(formData, token);
    }

    return(
       <section>
           <h1>Sign Up</h1>
           <SignupForm data={data}/>
       </section>
    )
}

export default Signup;