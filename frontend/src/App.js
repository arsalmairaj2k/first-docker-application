import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFromBackend = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/hello');
      setBackendMessage(response.data);
    } catch (err) {
      setError('Failed to connect to backend. Make sure the backend is running.');
      console.error('Error fetching from backend:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkHealth = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/health');
      setBackendMessage(response.data);
    } catch (err) {
      setError('Health check failed. Backend might be down.');
      console.error('Error checking health:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Automatically fetch from backend when component mounts
    fetchFromBackend();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌍 Hello World Full-Stack App</h1>
        <p>Welcome to your Dockerized React + Express application!</p>
        
        <div className="button-container">
          <button 
            onClick={fetchFromBackend}
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Loading...' : 'Get Hello Message'}
          </button>
          
          <button 
            onClick={checkHealth}
            disabled={loading}
            className="btn btn-secondary"
          >
            {loading ? 'Checking...' : 'Health Check'}
          </button>
        </div>

        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
          </div>
        )}

        {backendMessage && !error && (
          <div className="success-message">
            <h3>✅ Backend Response:</h3>
            <pre>{JSON.stringify(backendMessage, null, 2)}</pre>
          </div>
        )}

        <div className="info-section">
          <h3>📋 Application Info</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js (Port 3000)</li>
            <li><strong>Backend:</strong> Express.js (Port 5000)</li>
            <li><strong>Containerization:</strong> Docker + Docker Compose</li>
            <li><strong>Status:</strong> {backendMessage ? 'Connected' : 'Disconnected'}</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
