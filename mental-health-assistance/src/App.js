import React from 'react';
import Navbar from './components/Navbar';
import Homepage1 from './components/Homepage1';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const userType = 'user'; // Change this to 'therapist' for therapist view

  return (
    <div>
      <Navbar userType={userType} />
      <Homepage1 />
      <Footer />
    </div>
  );
};

export default App;
