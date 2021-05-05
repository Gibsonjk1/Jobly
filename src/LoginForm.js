import React, {useState} from "react"

function LoginForm({data}){
    const [formData, setFormData] = useState({
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
               <label htmlFor="username">Username: </label>
                    <input type="text" placeholder="username" id="username" name="username" onChange={handleChange}/><br />
                <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="password" id="password" name="password" onChange={handleChange}/> <br />
                <button onClick={handleSubmit}>Login!</button>
           </form>
       </section>
    )
}

export default LoginForm;