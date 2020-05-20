import React, { useEffect , useState } from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import CardColumns from 'react-bootstrap/CardColumns';

import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Columns from "react-columns";


// import Form from 'react-bootstrap/Form';
import '../assets/css/search.css';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

const Country = () => {
  const [latest , setLatest] = useState([]);
  const [result , setResult] = useState([]);
  const [searchCountry , setSearchCountry] = useState([""]);

   useEffect(()=> {
     axios
      .all([
     axios.get("https://disease.sh/v2/all"),
     axios.get("https://disease.sh/v2/countries")
    ])
      .then(res => {
        setLatest(res[0].data);
        setResult(res[1].data);
      })
      .catch(err => {
        console.log(err);
      });
   },[]);

   const date = new Date(parseInt(latest.updated));
   const updated = date.toString();
   const filterCountry = result.filter(item =>
  {
    return searchCountry !== "" ? item.country.toLowerCase().includes(searchCountry) : item;
  });


   const countries = filterCountry.map((data , i) =>
  {
    return (
      <Card 
          key = {i}
          bg="dark" 
          text={"light"} 
          className="text-center" 
          style={{ margin: "10px"}}>
          
          <Card.Img variant = "top" src={data.countryInfo.flag}/>
          <Card.Body>
            <Card.Title>{data.country}</Card.Title>
            <Card.Text >_____________________________________</Card.Text>
            <Card.Text >Today's cases: {data.todayCases}</Card.Text>
            <Card.Text>Today's deaths: {data.todayDeaths}</Card.Text>
            <Card.Text>Total Confirm cases: {data.cases}</Card.Text>
            <Card.Text>Active: {data.active}</Card.Text>
            <Card.Text>Deaths: {data.deaths}</Card.Text>
            <Card.Text>Critical: {data.critical}</Card.Text>
            <Card.Text>Recovered: {data.recovered}</Card.Text>
            
          </Card.Body>
    </Card>
    );
  });

  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];


  return (
    <div>

      <CardDeck>
  <Card 
    bg="warning" 
    text={"white"} 
    className="text-center" 
    style={{ margin: "10px"}}>
    
    <Card.Body>
      <Card.Title>Confirmed cases</Card.Title>
      <Card.Text>{latest.cases}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {updated}</small>
    </Card.Footer>
  </Card>
  
  <Card 
  bg="secondary" 
  text={"white"} 
  className="text-center"
  style={{ margin: "10px"}}>  
    <Card.Body>
      <Card.Title>Active Cases</Card.Title>
      <Card.Text>
      {latest.active}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {updated}</small>
    </Card.Footer>
  </Card>
  
  <Card 
    bg="danger" 
    text={"white"} 
    className="text-center"
    style={{ margin: "10px"}}>
    
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>{latest.deaths}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {updated}</small>
    </Card.Footer>
  </Card>

  <Card 
    bg="success" 
    text={"white"} 
    className="text-center"
    style={{ margin: "10px"}}>  
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
      {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {updated}</small>
    </Card.Footer>
  </Card>
</CardDeck>

{/* <Form>
  <Form.Group controlId="formBasicSearch">
    <Form.Control 
        type="text" 
        placeholder="Search A Country"
        onChange={e => setSearchCountry(e.target.value)} />
  </Form.Group>
</Form> */}


<div className ='search-box'>

  <input
    type="text"
    className="search-bar"
    placeholder="Search A Country"
    onChange={e => setSearchCountry(e.target.value)}
  />
</div>
<Columns queries={queries}>{countries}</Columns>
    </div>
  );
}

export default Country;
