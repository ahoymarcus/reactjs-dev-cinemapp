import React, { useState } from 'react';

import { MovieItem } from '../components';


export const MovieList = (props) => {
     const [ favorite, setFavorite ] = useState(false);

    console.log(props);
    console.log(props.movieList.Search);
    const { imdbID } = props.movieList.Search;
    
    const renderMovie = props.movieList.Search.map((movie) => {
        return <MovieItem key={imdbID} {...movie} favorite={favorite} />;
    });


    const handleFavoriteMovie = (imdbID) => {
        const favs = [];
        
        // const favorite = movieList.filter(() => {

        // });
        
        //setFavoriteMovies();
    };



    return (
        <u>
            {renderMovie}
        </u>
    );
};



