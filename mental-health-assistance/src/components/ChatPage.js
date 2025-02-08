import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { forumId } = useParams(); // Extract forum ID from the URL
  const [forumDetails, setForumDetails] = useState({
    title: 'Sample Forum Title',
    description: 'This is a description of the forum where people can discuss mental health topics.',
  });
  const [messages, setMessages] = useState([
    { user: 'John Doe', content: 'This is the first message.', timestamp: '2024-12-21T10:30:00Z' },
    { user: 'Jane Smith', content: 'I totally agree with this!', timestamp: '2024-12-21T11:00:00Z' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    console.log(`Fetching forum details for forumId: ${forumId}`);
  }, [forumId]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMessageData = {
      user: 'You',
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessageData]);
    setNewMessage('');
  };

  return (
    <div className="chat-page container mt-4">
      <h2 className="text-center mb-4">{forumDetails.title}</h2>
      <p>{forumDetails.description}</p>
      <div className="new-message mt-4">
        <textarea
          className="form-control mb-2"
          rows="3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        ></textarea>
        <button className="btn btn-primary" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      <br></br><br></br>
      <div className="chat-section">
        <h5>Chats</h5>
        <div className="messages-list">
          {messages.map((message, index) => (
            <div
              key={index}
              className="message-item border rounded p-3 mb-3"
              style={{
                backgroundColor: '#f8f9fa',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <strong>{message.user}</strong>
              <p className="mb-1">{message.content}</p>
              <div className="text-muted small">{new Date(message.timestamp).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default ChatPage;
