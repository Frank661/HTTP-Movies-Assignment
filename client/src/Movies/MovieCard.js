import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <h4>{director}</h4>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    

      <div className="movie-metascore">
        Stars: <h6>{stars}</h6>
      </div>

    </div>
  );
};

export default MovieCard;
