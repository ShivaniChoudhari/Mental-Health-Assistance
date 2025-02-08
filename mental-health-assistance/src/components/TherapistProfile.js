import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TherapistProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'You me',
    email: 'you.me@user.com',
    specialization: 'Clinical Psychology',
    yearsOfExperience: 10,
    licenseNumber: 'PSY123456',
    bio: 'Experienced clinical psychologist specializing in anxiety and depression.'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically make an API call to update the profile
  };

  return (
    <Container className="therapist-profile">
      <h2 className="text-center mb-4">My Profile</h2>
      
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Specialization</Form.Label>
            <Form.Control
              type="text"
              name="specialization"
              value={profile.specialization}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control
              type="number"
              name="yearsOfExperience"
              value={profile.yearsOfExperience}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>License Number</Form.Label>
            <Form.Control
              type="text"
              name="licenseNumber"
              value={profile.licenseNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="bio"
              value={profile.bio}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="me-2">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </Form>
      ) : (
        <>
          <div className="profile-info">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Specialization:</strong> {profile.specialization}</p>
            <p><strong>Years of Experience:</strong> {profile.yearsOfExperience}</p>
            <p><strong>License Number:</strong> {profile.licenseNumber}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
          </div>
          <div className="profile-actions">
            <Button variant="primary" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => navigate('/TherapistHomepage')}
              className="back-button"
            >
              Back to Home
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default TherapistProfile;
