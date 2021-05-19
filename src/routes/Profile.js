import React, {useState}from "react"
import { Card, CardBody, CardTitle} from "reactstrap";
import "./Profile.css"

function Profile({userInfo}){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })
   
    

    function handleChange(e){
        setFormData({...formData, 
            [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
    }
    console.log()
    return(
        <section className="col-md-4 profile-center">
              <Card>
                <CardBody>
                  <CardTitle className="font-weight-bold text-center">
                    Hello {userInfo.user.username}
                  </CardTitle>
                  <form>
                <label htmlFor="firstName">First Name: </label><br/>
                    <input type="text" value={userInfo.user.firstName} id="firstname" name="firstName" onChange={handleChange}/> <br />
                <label htmlFor="lastName">Last Name: </label> <br/>
                    <input type="text" value={userInfo.user.lastName} id="lastname" name="lastName" onChange={handleChange}/><br />
                <label htmlFor="email">Email: </label><br/>
                    <input type="email" value={userInfo.user.email} id="email" name="email" onChange={handleChange}/> <br />
                <button onClick={handleSubmit}>Submit to Change</button>
           </form>

                </CardBody>
              </Card>
            </section>
    )
}

export default Profile;