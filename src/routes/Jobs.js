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

function Jobs({jobs, token}){
  console.log(token)
  let history = useHistory();
  if (token === localStorage.getItem('token') && token != ""){
    return(
        <>
        <SearchBar />
        {jobs.jobs.map(job => (
          <section className="col-md-4 jobs-center">
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