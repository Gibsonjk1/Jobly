import React, {useState}from "react"
import JoblyApi from "../api"
import {useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Profile(){
    const [user, setUser] = useState(null)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })
    const { username } = useParams();
    console.log(username)
    
    async function getInfo(){
    const profileData = await JoblyApi.getUser(username)
    setUser(profileData)
    }

    getInfo()

    function handleChange(e){
        setFormData({...formData, 
            [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <section className="col-md-4 profile-center">
              <Card>
                <CardBody>
                  <CardTitle className="font-weight-bold text-center">
                    {user.username}
                  </CardTitle>
                  <CardText>
                  <form>
                <label htmlFor="firstName">First Name: </label>
                    <input type="text" placeholder="First Name" id="firstname" name="firstName" onChange={handleChange}/> <br />
                <label htmlFor="lastName">Last Name: </label>
                    <input type="text" placeholder="Last Name" id="lastname" name="lastName" onChange={handleChange}/> <br />
                <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange}/> <br />
                <button onClick={handleSubmit}>Submit!</button>
           </form>
                  </CardText>
                </CardBody>
              </Card>
            </section>
    )
}

export default Profile;