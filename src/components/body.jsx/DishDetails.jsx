import React from "react";
import {Card} from "react-bootstrap"
import DishComment from "./DishComment";

const DishDetails = props => {
  return(
    <div>

      <Card style={{ width: '48rem' }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title> {props.dish.name} </Card.Title>
          <Card.Text>
           {props.dish.description}
          </Card.Text>
          <p><b>Price: {props.dish.price}</b></p>
          <p><b>Price: {props.dish.label}</b></p>
          <p><b>Category: {props.dish.category}</b></p>
          <hr></hr>


          <DishComment comments= {props.comments}/>


        </Card.Body>
      </Card>
      
    </div>
  )
};

export default DishDetails