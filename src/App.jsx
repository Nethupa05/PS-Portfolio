import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import LectureDetail from './pages/LectureDetail.jsx';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecture/:id" element={<LectureDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;