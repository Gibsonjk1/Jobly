import React from "react"
import {Link, useHistory} from "react-router-dom"
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
  } from "reactstrap";
import SearchBar from '../SearchBar'
import "./Jobs.css"
import{v4 as uuid} from 'uuid'

function Jobs({jobs, token, checkAuth, searchBar}){
  let history = useHistory();
  if (checkAuth(token)){
    return(
        <>
        <SearchBar searchBar={searchBar}/>
        {jobs.jobs.map(job => (
          <section key={uuid()} className="col-md-4 jobs-center">
              <Card>
                <CardBody>
                    <Link to={`/companies/${job.companyHandle}`}>
                  <CardTitle className="font-weight-bold text-center">
                    {job.title}
                  </CardTitle>
                  </Link>
                  <CardSubtitle>
                      {job.companyName}
                  </CardSubtitle>
                  <CardText>
                    Salary: {job.salary}{<br/>}
                    Equity: {job.equity}
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
export default Jobs;