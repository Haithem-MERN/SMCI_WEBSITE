import React from "react";
import imgvalidation from "../images/validation.png";
import { Col, Container, Row, Card} from "react-bootstrap";


function About() {
  return (
    <div id="about">
      <div>
        <Container>
          <Row>
            <h1>
              Présentation:
              </h1>
            <Col>
              Créée en juin2021, l’entreprise SMCI est spécialisée dans la
              chaufferie, le traitement d’eau pour les chaudières à vapeur, les
              installations d’air comprimé, les installations Sanitaires, les
              installations de sécurité incendie (RIA….). SMCI est reconnue par
              l’excellence technique de son équipe, la qualité des chantiers
              réalisés et sa capacité à apporter des solutions novatrices aux
              questions d’économies d’énergies. SMCI est spécialisée aussi dans
              la construction et le montage de tout type de structures
              métalliques, tuyauteries et divers équipements industriels, qui a
              recours à des procédés d'exécution modernes, et qui utilise des
              techniques innovatrices. Malgré son jeune âge, la qualité, le
              professionnalisme et la disponibilité font partie des
              caractéristiques constantes de notre travail, c'est pourquoi
              choisir SMCI signifie choisir un travail de qualité et la garantie
              d'un travail bien fait. Notre équipe est dûment qualifiée et
              assurée, et est dotée d'une longue expérience dans le domaine,
              pour ses travaux réalisés dans différents domaines.
            </Col>
          </Row>
    
          <Row>
          <h1>Nos Valeurs</h1>
            <Col>
              <Card style={{ width: "14rem" }}>
              <Card.Img variant="top" src={imgvalidation} />
                <Card.Body>
                  <Card.Title>Savoir faire et qualité</Card.Title>
                  <Card.Text>
                    Quelques dizaines D’ANNEES ONT PERMIS A NOS EQUIPES D AVOIR
                    UN SAVOIR FAIRE CAPABLE DE REPONDRE A TOUTES VOS QUESTIONS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {" "}
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src={imgvalidation} />
                <Card.Body>
                  <Card.Title>Engagement</Card.Title>
                  <Card.Text>
                    NOTRE ENGAGEMENT ENVER NOS CLIENTS ÊTRE À L’ÉCOUTE INNOVER
                    ENSEMBLE ATTEINDRE LES RÉSULTATS VISÉS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src={imgvalidation} />
                <Card.Body>
                  <Card.Title>Disponibilité</Card.Title>
                  <Card.Text>
                    Disponibilité et réactivité caractérisent notre engagement
                    envers notre clientèle a travers une logistique mis au
                    service de nos clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src={imgvalidation} />
                <Card.Body>
                  <Card.Title>sens de Responsabilité</Card.Title>
                  <Card.Text>
                    Nous faisons toujours de notre mieux pour servir nos clients
                    avec le plus grand sens des responsabilités, en termes de
                    qualité, d’intégrité pour atteindre les résultats escomptés.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
