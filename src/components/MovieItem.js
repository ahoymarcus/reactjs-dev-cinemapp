import React from  'react';



export const MovieItem = ({ imdbID, Title, Type, Year, Poster }) => {

    

    return (
        <div className="single-movie">
            <div >
                <div className="movie-icon" >
                    O
                </div>
            </div>
            <div>
                <h4 className="movie-title">{Title}</h4>
                <p className="movie-year">{Year}</p>
            </div>
           <div>
               <span>*</span>
           </div>
        </div>
    );
};

 
