import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PoliticalQuiz } from './pages/PoliticalQuiz';
import { Candidates } from './pages/Candidates';
import { PolicyTracker } from './pages/PolicyTracker';
import { Events } from './pages/Events';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<PoliticalQuiz />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/policies" element={<PolicyTracker />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;