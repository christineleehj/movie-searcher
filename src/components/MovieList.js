import React from 'react';

const MovieList = (props) => {
    return (
        <>
        <div className="movie-list">
            {props.movies.map((movie, index) => 
            <div className="movie" key={index}>
                <img src={movie.Poster} alt={movie.Title} />  
                <h2>{movie.Title}</h2> 
                <h3>{movie.Year}</h3>
                <input className="view-button" type="button" value="View Details" />
            </div>)}
        </div>
        </>
    )
}

export default MovieList;