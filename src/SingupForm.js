import React, {useState} from "react"

function SignupForm({data}){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password:""
    })
    function handleChange(e){
        setFormData({...formData, 
            [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        data(formData)
    }
    return(
       <section>
           <form>
                <label htmlFor="firstName">First Name: </label>
                    <input type="text" placeholder="First Name" id="firstname" name="firstName" onChange={handleChange}/> <br />
                <label htmlFor="lastName">Last Name: </label>
                    <input type="text" placeholder="Last Name" id="lastname" name="lastName" onChange={handleChange}/> <br />
                <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange}/> <br />
               <label htmlFor="username">Username: </label>
                    <input type="text" placeholder="Username" id="username" name="username" onChange={handleChange}/><br />
                <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange}/> <br />
                <button onClick={handleSubmit}>Sign Up!</button>
           </form>
       </section>
    )
}

export default SignupForm;