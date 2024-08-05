import React from "react";
import '../scss/cards.scss'
import { Card, Col } from 'react-bootstrap';


export default function CardMaps({maps}){
    return(
        <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={maps.splash} alt={maps.displayName}/>
        <Card.Body>
          <Card.Title>{maps.displayName}</Card.Title>
          </Card.Body>
      </Card>
    </Col>
    )
}