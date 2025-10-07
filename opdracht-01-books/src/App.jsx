import './App.css';
import About from './Pages/About';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route >


                </Routes>
            </BrowserRouter>




        </>
    );
}

export default App;