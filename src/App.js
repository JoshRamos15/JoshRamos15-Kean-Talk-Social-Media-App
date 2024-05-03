import React from 'react';
import Header from './components/Header'; // Header component
import Slideshow from './components/Slideshow'; // Slideshow component
import Container from './components/Container'; // Container component, which might be used to wrap around Login for styling
import Footer from './components/Footer'; // Footer component
import Login from './components/Login'; // Login component
import './App.css'; // Main stylesheet

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
      <Slideshow />
      <Container>
        <Login />
      </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;