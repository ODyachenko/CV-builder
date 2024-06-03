import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Homepage from './pages/Homepage';
import CVPage from './pages/CVPage';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cv/:id" element={<CVPage />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
