// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import "./App.css"; // Creeremo questo file

function App() {
  return (
    <div className="app-container">
      {/* Creiamo un header semplice per tornare alla Home */}
      <header className="app-header">
        <Link to="/">
          <h1>MovieFinder</h1>
        </Link>
      </header>

      <main>
        {/* Qui React Router scambierà i componenti */}
        <Routes>
          {/* Strada 1: La Home Page */}
          <Route path="/" element={<Home />} />

          {/* Strada 2: La Pagina Dettagli */}
          {/* :id è un "parametro dinamico". Verrà sostituito dall'ID del film */}
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
          {/* NB: Aggiorna questo link con il tuo URL del repository GitHub! */}
          <a
            href="https://github.com/AlessioCom99/react-movie-finder"
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
