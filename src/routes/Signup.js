import React, {useContext} from "react"
import SignupForm from '../SingupForm'
import JoblyApi from '../api'
import AppContext from "../Context"


function Signup(){
    const {user} = useContext(AppContext)
    
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