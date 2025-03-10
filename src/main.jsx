import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Contact from '../src/components/Contact.jsx'; 
import AllProject from '../src/components/AllProject.jsx'; 
import Error from './components/Error.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/all-project" element={<AllProject />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
