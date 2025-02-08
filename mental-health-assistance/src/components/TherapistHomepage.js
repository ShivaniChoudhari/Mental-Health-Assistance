import React, { useState, useEffect } from "react";
import { Container, Button, Table, Modal, Form } from "react-bootstrap";
import TherapistNavbar from "./TherapistNavbar";
import "./Homepage.css";

const TherapistHomepage = () => {
  const [sessionRequests, setSessionRequests] = useState([
    {
      id: 1,
      patientName: "John Doe",
      requestedDate: "2023-10-15",
      description: "Anxiety management session"
    },
    {
      id: 2,
      patientName: "Jane Smith",
      requestedDate: "2023-10-16",
      description: "Stress coping strategies"
    }
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [scheduledSessions, setScheduledSessions] = useState([]);
  const [newSession, setNewSession] = useState({
    title: "",
    date: "",
    time: "",
    description: ""
  });

  const handleCreateSession = (request) => {
    setSelectedRequest(request);
    setShowCreateModal(true);
  };

  const handleSessionSubmit = (e) => {
    e.preventDefault();
    setScheduledSessions([...scheduledSessions, {
      ...newSession,
      patientName: selectedRequest.patientName
    }]);
    setShowCreateModal(false);
    setNewSession({
      title: "",
      date: "",
      time: "",
      description: ""
    });
  };

  return (
    <>
      <TherapistNavbar />
      <Container className="therapist-homepage">
      
        <h2 className="text-center mb-4">Session Requests</h2>
        
        <div className="session-requests">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Requested Date</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessionRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.patientName}</td>
                  <td>{request.requestedDate}</td>
                  <td>{request.description}</td>
                  <td>
                    <Button 
                      variant="primary"
                      onClick={() => handleCreateSession(request)}
                    >
                      Create Session
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="scheduled-sessions mt-5">
          <h3>Scheduled Sessions</h3>
          {scheduledSessions.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Session Title</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {scheduledSessions.map((session, index) => (
                  <tr key={index}>
                    <td>{session.patientName}</td>
                    <td>{session.title}</td>
                    <td>{session.date}</td>
                    <td>{session.time}</td>
                    <td>{session.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No sessions scheduled yet.</p>
          )}
        </div>

        <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Session for {selectedRequest?.patientName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSessionSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Session Title</Form.Label>
                <Form.Control
                  type="text"
                  value={newSession.title}
                  onChange={(e) => setNewSession({...newSession, title: e.target.value})}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newSession.date}
                  onChange={(e) => setNewSession({...newSession, date: e.target.value})}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  value={newSession.time}
                  onChange={(e) => setNewSession({...newSession, time: e.target.value})}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newSession.description}
                  onChange={(e) => setNewSession({...newSession, description: e.target.value})}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Schedule Session
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default TherapistHomepage;
