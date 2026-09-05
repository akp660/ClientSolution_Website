import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/landing"
        element={
          <Landing
            onEnter={() => navigate('/')}
            onLogin={() => navigate('/login')}
            onSignUp={() => navigate('/signup')}
          />
        }
      />
      <Route
        path="/login"
        element={<Login onBackToLanding={() => navigate('/')} />}
      />
      <Route
        path="/signup"
        element={<SignUp onBackToLanding={() => navigate('/')} />}
      />
      <Route
        path="/privacy"
        element={<PrivacyPolicy onBack={() => navigate('/')} />}
      />
      <Route
        path="/terms"
        element={
          <TermsAndConditions
            onBack={() => navigate('/')}
            onPrivacy={() => navigate('/privacy')}
          />
        }
      />
      <Route
        path="/"
        element={
          <Home
            onBackToLanding={() => navigate('/')}
            onPrivacyPolicy={() => navigate('/privacy')}
          />
        }
      />
    </Routes>
  );
}

export default App;
