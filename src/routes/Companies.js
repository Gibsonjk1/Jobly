import React from "react"
import {Link, useHistory} from "react-router-dom"
import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";
  import SearchBar from '../SearchBar'
  import "./Companies.css"

function Companies({companies, token}){
    console.log(token)
    let history = useHistory();
if (token === localStorage.getItem('token') && token != ""){
    return(
        <>
        <SearchBar />
        {companies.companies.map(company => (
          <section className="col-md-4 companies-center">
              <Card>
                <CardBody>
                    <Link to={`/companies/${company.handle}`}>
                  <CardTitle className="font-weight-bold text-center">
                    {company.name}
                  </CardTitle>
                  </Link>
                  <CardText>
                    {company.description}
                  </CardText>
                </CardBody>
              </Card>
            </section>
    ))}
    </>
    );
}else{
    return history.push('/')
}
}

export default Companies;