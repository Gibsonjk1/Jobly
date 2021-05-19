import React, {useState, useEffect}from "react";
import {useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import JoblyApi from '../api'
import "./IndividualCompany.css"
import{v4 as uuid} from 'uuid'

function Company() {

    const [company, setCompany] = useState()
    const [isLoading, setIsLoading] = useState(true);
  const { handle } = useParams();
 
  useEffect(() => {
    async function getInfo(handle) {
      let company = await JoblyApi.getCompany(handle);
      setCompany(company)
      setIsLoading(false);
    }
    getInfo(handle);
  }, []);

if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
      <>
      <h1> {company.name}</h1>
      <h5> {company.description}</h5>
      <hr />
        {company.jobs.map(job => (
          <section key={uuid()}className="col-md-4 company-center">
              <Card>
                <CardBody>
                  <CardTitle className="font-weight-bold text-center">
                    {job.title}
                  </CardTitle>
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
       
  ))
        }
  </>
  )
}

export default Company;