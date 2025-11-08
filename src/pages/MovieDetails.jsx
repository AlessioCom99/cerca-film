// src/pages/MovieDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // <-- Hook chiave!

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL_BASE = "https://api.themoviedb.org/3/movie/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetails() {
  // === STATO ===
  const [movie, setMovie] = useState(null); // Stato per il singolo film
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // === ROUTING ===
  // 1. Usiamo useParams per leggere i parametri dall'URL
  const { id } = useParams(); // Legge ':id' dalla Route in App.jsx

  // === EFFECT ===
  // Questo useEffect si attiva quando il componente appare
  // e ogni volta che l' 'id' dall'URL cambia.
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        // Chiamata API diversa: per i dettagli di un film specifico
        const url = `${API_URL_BASE}${id}?api_key=${API_KEY}&language=it-IT`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Film non trovato o errore di rete");
        }

        const data = await response.json();
        setMovie(data); // Salviamo il singolo film
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]); // <-- La dipendenza ora è l' 'id' dall'URL

  // === RENDER ===
  if (loading) return <p className="status-message">Caricamento dettagli...</p>;
  if (error) return <p className="status-message error">Errore: {error}</p>;
  if (!movie) return null; // Se non c'è film (es. all'inizio)

  // Se abbiamo il film, mostriamo i dettagli
  const imageUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="movie-details-page">
      <img src={imageUrl} alt={movie.title} />
      <div className="movie-details-info">
        <h2>{movie.title}</h2>
        <p>
          <strong>Tagline:</strong> {movie.tagline || "N/A"}
        </p>
        <p>
          <strong>Valutazione:</strong> {movie.vote_average.toFixed(1)} / 10
        </p>
        <p>
          <strong>Data di Uscita:</strong> {movie.release_date}
        </p>
        <h3>Trama</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
