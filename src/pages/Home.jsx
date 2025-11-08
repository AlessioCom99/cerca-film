// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Per cliccare sui film
import MovieCard from "../components/MovieCard"; // Creeremo questo

// Prendiamo la chiave API dal file .env
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3/search/movie";

function Home() {
  // === STATO ===
  const [searchTerm, setSearchTerm] = useState(""); // Stato per l'input controllato
  const [query, setQuery] = useState(""); // Stato per la ricerca (iniziamo con una ricerca)
  const [movies, setMovies] = useState([]); // Stato per i risultati
  const [loading, setLoading] = useState(false); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per gli errori

  // === EFFECT ===
  // Questo useEffect si attiva quando il componente appare
  // e ogni volta che lo stato 'query' cambia.
  useEffect(() => {
    // Funzione per fare la chiamata API
    const fetchMovies = async () => {
      if (query === "") {
        setMovies([]);
        return;
      }

      setLoading(true);
      setError(null);
      setMovies([]);

      try {
        const url = `${API_URL}?api_key=${API_KEY}&query=${query}`;
        const response = await fetch(url);

        if (!response.ok) {
          // Gestione errori HTTP
          throw new Error("Errore nella risposta della rete");
        }

        const data = await response.json();
        setMovies(data.results); // Salviamo i film nello stato
      } catch (err) {
        setError(err.message); // Salviamo l'errore
      } finally {
        setLoading(false); // Finito di caricare (sia in caso di successo che errore)
      }
    };

    fetchMovies(); // Chiamiamo la funzione
  }, [query]); // <-- Array delle dipendenze: il "grilletto"

  // === GESTIONE FORM ===
  const handleSubmit = (e) => {
    e.preventDefault(); // Impedisce al form di ricaricare la pagina
    setQuery(searchTerm); // Imposta la 'query', che farà partire l'useEffect
  };

  // === RENDER ===
  return (
    <div className="home-page">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cerca un film..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>

      {/* 1. Gestione del Loading */}
      {loading && <p className="status-message">Caricamento in corso...</p>}

      {/* 2. Gestione dell'Errore */}
      {error && <p className="status-message error">Errore: {error}</p>}

      {/* 3. Gestione dei Risultati */}
      <div className="movies-grid">
        {!loading &&
          !error &&
          movies.map((movie) => (
            // Usiamo il componente MovieCard
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default Home;
