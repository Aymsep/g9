import React from 'react';

const MovieCard = ({title, description, posterURL, rating}) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="rating">{rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;
