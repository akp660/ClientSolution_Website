import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DownloadPage from './pages/DownloadPage';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/landing"
        element={
          <Landing
            onEnter={() => navigate('/')}
          />
        }
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
        path="/download"
        element={<DownloadPage />}
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
