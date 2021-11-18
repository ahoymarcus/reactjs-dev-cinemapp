import React, { useState, useEffect } from 'react';

import { getMovieList } from '../../services';



export const Cinemapp = () => {
    let [ movie, setMovie ] = useState('');
    let [ movieList, setMovieList ] = useState([]);


    const handleChange = (e) => {
       setMovie(e.target.value);
    };


    useEffect(() => {
        let mounted = true;
        getMovieList(movie)
            .then(items => {
                if (mounted) {
                    setMovieList(items);
                }
            });

        return () => mounted = false;
    }, movie);


    return (
        <>
            <header className="header-cinema">
                <h1>Cinema App</h1>
                <p>Bem-vindo ao mundo espetacular do cinema</p>
            </header>

            <main className="main-cinema">
                <input 
                    type="text" 
                    name="input" 
                    id="input" 
                    placeholder="O que você busca..."
                    
                    onChange={handleChange} 
                 />

                <br />
                
                


            </main>
        </>
    );
};



