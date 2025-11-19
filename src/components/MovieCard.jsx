// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

// URL base per le immagini dei poster
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
// Immagine placeholder se il film non ha un poster
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/500x750?text=No+Image";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : PLACEHOLDER_IMAGE;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <div className="movie-card-info">
        <h3>{movie.title}</h3>
        <p>Uscita: {movie.release_date}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
