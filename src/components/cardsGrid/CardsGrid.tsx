import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ThemeCard from '../themeCard/ThemeCard';
import VulnerbilitiesTrending from '../vulnerbilitiesTrending/VulnerbilitiesTrending';

import vulnarbilitiesTrendingData from '../../data/vulnerbilitiesTrendingData';
import highestCVEData from '../../data/highestCVEData';
import HighestCVE from '../highestCVE/HighestCVE';
import './cardsGrid.css';

const CardsGrid = () => {
  return (
    <div className="cards-grid_section">
      <Container>
        <Row>
          <Col md={5}>
            <ThemeCard cardTitle="Top Vulnerbility Trends">
              <VulnerbilitiesTrending vulnerbilityData={vulnarbilitiesTrendingData} />
            </ThemeCard>
          </Col>
          <Col md={7}>
            <ThemeCard cardTitle="Highlighted CVEs">
              <HighestCVE highestCVEData={highestCVEData} />
            </ThemeCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardsGrid;
