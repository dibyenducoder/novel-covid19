import React, { useEffect , useState } from 'react';
import Card from 'react-bootstrap/Card';
// import CardColumns from 'react-bootstrap/CardColumns';

import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import Columns from "react-columns";
// import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import '../assets/css/search.css';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

const India = () => {
  const [latest , setLatest] = useState([]);
  const [result , setResult] = useState([]);
  const [searchState , setSearchState] = useState([""]);

   useEffect(()=> {
     axios
      .all([
     axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"),
     axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
    ])
      .then(res => {
        setLatest(
          {
            active : res[0].data.data.total.active ,
            confirmed: res[0].data.data.total.confirmed,
            deaths: res[0].data.data.total.deaths,
            recovered: res[0].data.data.total.recovered,
            updated : res[0].data.data.lastRefreshed

          });
        setResult(res[1].data.data.statewise);
      })
      .catch(err => {
        console.log(err);
      });
   },[]);

  //  const date = new Date(parseInt(latest.data.lastRefreshed));
  //  const updated = date.toString();
   const filterState = result.filter(item =>
  {
    return searchState !== "" ? item.state.toLowerCase().includes(searchState) : item;
  });


   const tableContent = filterState.map((data , i) =>
  {
    return (
    
    <tr key={i}>
        <th scope='row'>{i}</th>
        <td>{data.state}</td>
        <td>{data.confirmed}</td>
        <td>{data.active}</td>
        <td>{data.deaths}</td>
        <td>{data.recovered}</td>
      </tr>
    );
  });

  return (
    <div>

      <CardDeck>
  <Card 
    bg="warning" 
    text={"white"} 
    className="text-center" 
    style={{ margin: "10px"}}>
    
    <Card.Body>
      <Card.Title>Confirm cases</Card.Title>
      <Card.Text>{latest.confirmed}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {latest.updated}</small>
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
      <small>Last updated {latest.updated}</small>
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
      <small>Last updated {latest.updated}</small>
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
      <small>Last updated {latest.updated}</small>
    </Card.Footer>
  </Card>
</CardDeck>

{/* <Form>
  <Form.Group controlId="formBasicSearch">
   
    <Form.Control 
        type="text" 
        placeholder="Search A State"
        onChange={e => setSearchState(e.target.value)} />
    
  </Form.Group>
</Form> */}

<div className ='search-box'>
  <input
    type="text"
    className="search-bar"
    placeholder="Search your State"
    onChange={e => setSearchState(e.target.value)}
  />
  {/* <Icon name="rocket" size={'{30}'} color="#900"/> */}
</div>

<Table striped bordered hover variant="dark">
    <thead>
      <th>#</th>
      <th>States</th>
      <th>Confirmed</th>
      <th>Active</th>
      <th>Deaths</th>
      <th>Recovered</th>
    </thead>
    <tbody>{tableContent}</tbody>
</Table>
</div>
  );
}

export default India;
