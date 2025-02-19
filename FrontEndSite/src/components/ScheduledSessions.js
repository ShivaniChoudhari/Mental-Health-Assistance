import React, { useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import TherapistNavbar from "./TherapistNavbar";
import { useSessionContext } from "../context/SessionContext";

const ScheduledSessions = () => {
  const { scheduledSessions, rescheduleSession } = useSessionContext();
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [updatedSession, setUpdatedSession] = useState({
    title: "",
    date: "",
    time: "",
    description: ""
  });

  // Open Reschedule Modal
  const handleReschedule = (session) => {
    setSelectedSession(session);
    setUpdatedSession({ ...session });
    setShowRescheduleModal(true);
  };

  // Submit Reschedule Changes
  const handleRescheduleSubmit = (e) => {
    e.preventDefault();
    rescheduleSession(selectedSession.id, updatedSession);
    setShowRescheduleModal(false);
  };

  return (
    <>
      <TherapistNavbar />
      <Container className="scheduled-sessions mt-5">
        <h2 className="text-center mb-4">Scheduled Sessions</h2>
        {scheduledSessions.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Session Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Actions</th>
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
                  <td>
                    <Button variant="warning" onClick={() => handleReschedule(session)}>
                      Reschedule
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-center">No sessions scheduled yet.</p>
        )}
      </Container>

      {/* Reschedule Modal */}
      <Modal show={showRescheduleModal} onHide={() => setShowRescheduleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Session for {selectedSession?.patientName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRescheduleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Session Title</Form.Label>
              <Form.Control
                type="text"
                value={updatedSession.title}
                onChange={(e) => setUpdatedSession({ ...updatedSession, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={updatedSession.date}
                onChange={(e) => setUpdatedSession({ ...updatedSession, date: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={updatedSession.time}
                onChange={(e) => setUpdatedSession({ ...updatedSession, time: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={updatedSession.description}
                onChange={(e) => setUpdatedSession({ ...updatedSession, description: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Session
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ScheduledSessions;
