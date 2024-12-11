import React from "react";
import '../scss/cards.scss'
import { Card, Col } from 'react-bootstrap';


export default function CardWeapons({weapons}){
    return(
        <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={weapons.displayIcon} alt={weapons.displayName} height={'100%'} />
        <Card.Body>
          <Card.Title>{weapons.displayName}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    )
}