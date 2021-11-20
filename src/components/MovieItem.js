import React, { useState } from  'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';



export const MovieItem = ({ imdbID, Title, Type, Year, Poster }) => {
    const [ favorite, setFavorite ] = useState(false);


    const renderStarIcon = () => {
        
        if (!favorite) {
            
            return <AiOutlineStar />;
        } else {
            return <AiFillStar className="AiFillStar" />
        }
    };

    const toggleFavorite = () => {
        setFavorite((favorite ? false : true)) ;
    };



    return (
        <div className="single-movie">
            <div className="single-movie-header">
                
                    <div className="movie-icon" >
                        
                    </div>
                
                <div className="single-movie-text">
                    <h4 className="movie-title">{Title}</h4>
                    <p className="movie-year">{Year}</p>
                </div>
            </div>
           
           <div className="star-container" onClick={(() => toggleFavorite())} >
               {renderStarIcon()}
           </div>
        </div>
    );
};

 
