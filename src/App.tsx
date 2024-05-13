import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CVPage from './pages/CVPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cv/:id" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
