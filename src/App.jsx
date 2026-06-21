import { useState } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <>
      {currentPage === 'landing' && (
        <Landing 
          onEnter={() => handleNavigate('home')}
          onLogin={() => handleNavigate('login')}
          onSignUp={() => handleNavigate('signup')}
        />
      )}
      {currentPage === 'login' && (
        <Login onBackToLanding={handleBackToLanding} />
      )}
      {currentPage === 'signup' && (
        <SignUp onBackToLanding={handleBackToLanding} />
      )}
      {currentPage === 'home' && (
        <Home onBackToLanding={handleBackToLanding} />
      )}
    </>
  );
}

export default App;
