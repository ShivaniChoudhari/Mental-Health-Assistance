import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, Toast, ToastContainer } from 'react-bootstrap';

const UserSessions = () => {
  const [showModal, setShowModal] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Open and Close Modal Handlers
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle Send Request
  const handleSendRequest = () => {
    console.log(`Request sent for new date: ${preferredDate} and time: ${preferredTime}`);
    setShowModal(false);
    setShowToast(true); // Show success notification
  };

  return (
    <Container className="mt-4 main-content">
      <h2 className="mb-4">Your Upcoming Appointment</h2>
      <Table striped bordered hover className="shadow-sm">
        <thead className="table-info">
          <tr>
            <th>Doctor's Name</th>
            <th>Scheduled Date</th>
            <th>Scheduled Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. John Doe</td>
            <td>March 10, 2025</td>
            <td>3:00 PM</td>
            <td>
              <Button variant="warning" onClick={handleShow}>Request Edit</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Edit Request Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Request a New Appointment Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" onChange={(e) => setPreferredDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control type="time" onChange={(e) => setPreferredTime(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSendRequest}>Send Request</Button>
        </Modal.Footer>
      </Modal>

      {/* Success Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto text-white">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Request to change appointment sent successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default UserSessions;
