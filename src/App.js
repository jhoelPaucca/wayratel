import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer'; 
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

