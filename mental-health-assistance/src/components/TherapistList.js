import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const therapists = [
  {
    id: 1,
    name: 'Dr. Anish V',
    specialization: 'Clinical Psychology',
    experience: 10,
    availability: 'Mon-Fri, 9am-5pm',
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063015.png"
  },
  {
    id: 2,
    name: 'Dr. Harsh J',
    specialization: 'Cognitive Behavioral Therapy',
    experience: 8,
    availability: 'Tue-Sat, 10am-6pm',
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063015.png"
  },
  {
    id: 3,
    name: 'Dr. Vardhan N',
    specialization: 'Human Behaviour',
    experience: 12,
    availability: 'Mon-Thu, 8am-4pm',
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063015.png"
  }
];

const TherapistList = () => {
  return (
    <Container className="therapist-list mt-5">
      <h2 className="text-center mb-4">Available Therapists</h2>
      <Row>
        {therapists.map(therapist => (
          <Col key={therapist.id} md={4} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={`${therapist.image}`}
                alt={therapist.name}
              />
              <Card.Body>
                <Card.Title>{therapist.name}</Card.Title>
                <Card.Text>
                  <strong>Specialization:</strong> {therapist.specialization}<br />
                  <strong>Experience:</strong> {therapist.experience} years<br />
                  <strong>Availability:</strong> {therapist.availability}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100"
                  onClick={() => {
                    alert(`Session request sent to ${therapist.name}`);
                  }}
                >
                  Request Session
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TherapistList;
