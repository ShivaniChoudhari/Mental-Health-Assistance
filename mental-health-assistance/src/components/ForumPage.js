import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import '../components/ForumPage.css';

const ForumPage = () => {
  const navigate = useNavigate();
  const { forumId } = useParams(); // Get the forum ID from the URL
  const [forums, setForums] = useState([
    { id: 1, title: 'Mental Health Tips', description: 'Share your daily tips for mental health improvement!', likes: 12 },
    { id: 2, title: 'Anxiety Support', description: 'Discuss and find support for anxiety management.', likes: 8 },
    { id: 3, title: 'Motivational Stories', description: 'Share and read inspiring stories!', likes: 15 },
    { id: 4, title: 'Insecurities', description: 'Talk about personal struggles and overcome insecurities.', likes: 10 },
    { id: 5, title: 'Self-Help', description: 'Discuss self-help books, courses, and strategies.', likes: 7 },
    { id: 6, title: 'Meditation', description: 'Share your meditation techniques and experiences.', likes: 11 },
    { id: 7, title: 'Self-Confidence', description: 'Boost your self-esteem with shared experiences.', likes: 9 },
  ]);

  const handleLike = (id) => {
    setForums(forums.map(forum => 
      forum.id === id ? { ...forum, likes: forum.likes + 1 } : forum
    ));
  };

  const handleCreateForum = () => {
    navigate('/create-forum'); // Navigate to CreateForum page
  };

  const handleChat = (id) => {
    navigate(`/chat/${id}`); // Navigate to ChatPage for the selected forum
  };

  return (
    <Container className="forum-page mt-4">
      <h2 className="text-center mb-4">Community Forums</h2>
      <div className="text-right mb-3">
        <Button variant="primary" onClick={handleCreateForum}>
          Create New Forum
        </Button>
      </div>
      <div className="forum-list">
        {forums.map(forum => (
          <Card key={forum.id} className="mb-3">
            <Card.Body>
              <Card.Title>{forum.title}</Card.Title>
              <Card.Text>{forum.description}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="light" onClick={() => handleLike(forum.id)}>
                  <FaThumbsUp /> {forum.likes}
                </Button>
                <Button variant="secondary" onClick={() => handleChat(forum.id)}>
                  Chat
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ForumPage;
