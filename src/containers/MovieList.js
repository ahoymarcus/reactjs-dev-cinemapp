import React from 'react';

import { MovieItem } from '../components';


export const MovieList = (props) => {
    console.log(props);
    console.log(props.movieList.Search);
    const { imdbID } = props.movieList.Search;
    
    const renderMovie = props.movieList.Search.map((movie) => {
        return <MovieItem key={imdbID} {...movie} />;
    });


    return (
        <u>
            {renderMovie}
        </u>
    );
};


