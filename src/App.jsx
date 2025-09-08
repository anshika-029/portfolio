import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    // <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    // </ThemeProvider>
  );
}

export default App;
