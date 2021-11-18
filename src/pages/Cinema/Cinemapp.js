import React, { useState, useEffect } from 'react';

import { getMovieList } from '../../services';
import { MovieList } from '../../containers';



export const Cinemapp = () => {
    let [ input, setInput ] = useState('');
    let [ movie, setMovie ] = useState('');
    let [ movieList, setMovieList ] = useState([]);


    const handleChange = (e) => {
       setInput(e.target.value);

       console.log('input = ', input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovie(input);

        return null;
    };


    useEffect(() => {
        let mounted = true;
        getMovieList(movie)
            .then(items => {
                if (mounted) {
                    setMovieList(items);

                    console.log(movie);
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
                    required
                 />
                <button type="submit" onClick={handleSubmit} >Buscar</button>
                <br />
                
                <MovieList movies={movieList} />


            </main>
        </>
    );
};



