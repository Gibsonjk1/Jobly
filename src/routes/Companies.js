import React from "react"
import {Link, Redirect} from "react-router-dom"
import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";
  import SearchBar from '../SearchBar'
  import "./Companies.css"

function Companies({companies, token, checkAuth, filtered, searchBar}){
    let comp = filtered.current ? filtered.current : companies.companies
if (checkAuth(token)){
    return(
        <>
        <SearchBar searchBar={searchBar}/>
        {comp.map(company => (
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
    return(
        <Redirect to="/" />
    )
}
}

export default Companies;