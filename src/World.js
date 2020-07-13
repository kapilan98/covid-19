import React from 'react'
import styles from './country.module.css'
import CountUp from 'react-countup'
//import styles from './country.module.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'

import CardColumns from 'react-bootstrap/CardColumns';
import {
   CardImg, CardTitle, CardText,  CardSubtitle, CardBody,Row,Col,
} from 'reactstrap';

const World=({loading,active,cases, deaths,recovered,updated,tcases,tdeaths,trecovered})=>{


var case1={cases}
var case2=case1.cases


     if(loading){
        return <div style={{justifyContent:"center"}}><Spinner animation="border" role="status">
        <span className="sr-only" style={{justifyContent:"center"}}>Hold on!. Data is being fetched......</span>
      </Spinner></div>
}
else{
return(

	<div className={styles.country}>
<CardDeck>
  <Card 
  	bg="secondary" text="white">
    <Card.Body>
      <Card.Title><h1 style={{fontSize:"1.5rem"}}>Cases</h1></Card.Title>
      <Card.Text  style={{fontSize:"3.5rem"}}>
		{cases}   	
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated on : {updated} </small>
    </Card.Footer>
  </Card>
  <Card
  bg="danger" text="white"
  >
    <Card.Body>
      <Card.Title><h1 style={{fontSize:"1.5rem"}}>Deaths</h1></Card.Title>
      <Card.Text style={{fontSize:"3.5rem"}}>{deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated on : {updated}</small>
    </Card.Footer>
  </Card>
  <Card
  bg="success" text="white">
    <Card.Body>
	  <Card.Title ><h1 style={{fontSize:"1.5rem"}}>Recovered</h1></Card.Title>
      <Card.Text style={{fontSize:"3.5rem"}}>{recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated on : {updated}</small>
    </Card.Footer>
  </Card>
</CardDeck>
		<div className={styles.space}/>

	</div>
		)
	}
}
export default World;