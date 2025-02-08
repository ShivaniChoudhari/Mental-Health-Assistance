import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    bio: 'Passionate about mental health and wellness.',
    gender: 'Male',
    password: '********',
    profilePicture: 'https://img.freepik.com/free-vector/cartoon-human-face_1308-135836.jpg', // Freepik placeholder image
  });

  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(profile.profilePicture);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, profilePicture: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <Container className="user-profile mt-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4" style={{ width: '60%', borderRadius: '15px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">My Profile</h2>
          <div className="text-center mb-4">
            <label htmlFor="profile-picture" className="profile-img-container">
              <img
                src={preview}
                alt="Profile"
                className="rounded-circle"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: '4px solid #007bff',
                }}
              />
            </label>
            {isEditing && (
              <Form.Control type="file" accept="image/*" id="profile-picture" onChange={handleImageChange} className="mt-2" />
            )}
          </div>

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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select name="gender" value={profile.gender} onChange={handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                  required
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
              <div className="profile-info text-center">
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Phone:</strong> {profile.phone}</p>
                <p><strong>Gender:</strong> {profile.gender}</p>
                <p><strong>Bio:</strong> {profile.bio}</p>
              </div>
              <div className="text-center">
                <Button variant="primary" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
