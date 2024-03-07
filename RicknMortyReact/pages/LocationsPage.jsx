import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const result = await axios('https://rickandmortyapi.com/api/location');
      setLocations(result.data.results);
    };
    fetchLocations();
  }, []);

  return (
    <Row xs={1} md={4} className="g-4"> {/* adjust "md" for the desired number of cards per row */}
      {locations.map((location) => (
        <Col key={location.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={location.image} />
            <Card.Body>
              <Card.Title>{location.name}</Card.Title>
              <Card.Text>
                Dimension: {location.dimension}
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default LocationsPage;

