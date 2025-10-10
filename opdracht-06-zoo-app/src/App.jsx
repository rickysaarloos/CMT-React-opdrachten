import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/animal/:id" element={<DetailPage />} />
            <Route path="*" element={<h2>404 niet gevonden </h2>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
