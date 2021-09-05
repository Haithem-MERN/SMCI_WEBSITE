import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import chaufferie from "../images/chaudiere.jpg";
import airComprime from "../images/airComprime.jpg";
import traitEau from "../images/traitEau.jpg";
import sanitaire from "../images/sanitaire.jpg";
import contrat from "../images/contrat.jpg";

function Services() {
  return (
    <div id="services">
      <Container>
        <h1>Activites et Services</h1>
        <Row className="desc-service">
          Nous fournissons à nos clients des prestations de qualité exécutées
          par des professionnels. Le suivi de nos réalisations, ainsi qu'une
          disponibilité permanente, sont les conditions essentielles d'un
          service performant. Pour tout projet à concevoir dans les différents
          domaines (Chaufferie, air comprimé, traitement d’eau, circuits
          sanitaires et circuit sécurité d’incendie), nos compétences et notre
          expérience nous permettrons de concevoir une offre adaptée à votre
          situation et à vos besoins. La fiabilité technique des installations
          et les économies d'énergie demeurant une de nos priorités.
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={chaufferie} />
              <Card.Body>
                <Card.Title>Chaufferie</Card.Title>
                <Card.Text>
                  <li>Mise en place, transfert et réparation des chaudières à gaz ou à Fioul</li>
                  <li>Renouvellement et réparation des circuits vapeurs y compirs les systèmes de régulation vapeur</li>
                  <li>Assistance technique pour l'économie d'énergie au niveau des chaudières et circuit de vapeurs</li>
                  
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src={airComprime} />
              <Card.Body>
                <Card.Title>Air comprimé</Card.Title>
                <Card.Text>
                  <li>Fourniture et pose des équipements d’air comprimé </li>
                  <li>Réparation
                  des installations d’air comprimé </li>
                  <li>Assistance technique pour
                  l’économie d’énergie au niveau d’installation d’air comprimé </li>
                    
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src={traitEau} />
              <Card.Body>
                <Card.Title>Traitement d'eau</Card.Title>
                <Card.Text>
                  <li>
                    Fourniture et pose des équipements de traitement d’eau
                  </li>
                  <li>Réparation des installations du Traitement d’eau</li>
                  <li>
                    Assistance technique pour les modifications ou
                    renouvellements des installations
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src={sanitaire} />
              <Card.Body>
                <Card.Title>Installation Sanitaire</Card.Title>
                <Card.Text>
                  Production d’eau chaude sanitaire électrique, gaz ou par
                  chaufferie centrale Equipements sanitaires collectifs ou
                  spécialisés
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src={contrat} />
              <Card.Body>
                <Card.Title>Maintenance des installations</Card.Title>
                <Card.Text>
                  Nous proposons à la fin de nos chantiers un contrat de
                  maintenance pour accompagner nos clients dans les opérations
                  d'entretien et de suivi, la conduite des équipements et
                  l'optimisation des consommations. L’activité maintenance est
                  pilotée avec la solution GMAO.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
