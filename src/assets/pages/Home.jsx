import React from "react";
import '../scss/home.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Home(){
    return(
        <div className="home center">
          <header className="hero-section text-center text-light">
            <Container>
              <h1>Bem-vindo ao Mundo de Valorant</h1>
              <p>Valorant é um jogo de tiro tático em primeira pessoa desenvolvido pela Riot Games, conhecido por combinar elementos de estratégia de equipe e habilidades individuais. Lançado em 2020, o jogo se destaca por seu foco em partidas competitivas 5v5, onde duas equipes disputam em rodadas alternadas como atacantes e defensores.</p>
              <img src='src\assets\images\valorant_bg.jpg' alt="Valorant Logo" style={{width:'50%'}} />
            </Container>
          </header>
    
          <section className="features-section py-5 ">
            <Container>
              <Row className="text-center">
                <Col md={4}>
                  <Card className="feature-card p-4 border-0">
                    <Card.Body>
                      <Card.Title>Agentes</Card.Title>
                      <Card.Text>Conheça os diferentes agentes e suas habilidades únicas.</Card.Text>
                      <Button href="/agents" variant="primary">Ver Agentes</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="feature-card p-4 border-0">
                    <Card.Body>
                      <Card.Title>Mapas</Card.Title>
                      <Card.Text>Explore os diversos mapas onde as batalhas acontecem.</Card.Text>
                      <Button href="/maps" variant="primary">Ver Mapas</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="feature-card p-4 border-0">
                    <Card.Body>
                      <Card.Title>Armas</Card.Title>
                      <Card.Text>Confira a variedade de armas disponíveis no jogo.</Card.Text>
                      <Button href="/weapons" variant="primary">Ver Armas</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          </div>
    )
}