import React from  'react';



export const MovieItem = ({ imdbID, Title, Type, Year, Poster }) => {

    

    return (
        <div className="single-movie">
            <h4>{Title}</h4>
            <p>{Year}</p>
        </div>
    );
};

 
