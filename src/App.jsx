// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";   

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/">
          <h1>MovieFinder</h1>
        </Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          Creato da <strong>Alessio Comentale</strong> &copy; 2025
        </p>
        <p>
          Dati forniti da <a> </a>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDb (The Movie Database)
          </a>
        </p>
        <p>
          <a
            href="https://github.com/AlessioCom99/movie-finder"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vedi il progetto su GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
