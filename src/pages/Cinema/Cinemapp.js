// https://github.com/fleye-me/dev-cinemapp
// https://www.figma.com/proto/UE8zfSxxf8K0TzpgslbYhz/CinemAPP?node-id=1%3A32&scaling=contain
import React, { useState, useEffect } from 'react';

import { Loading } from '../../components';
import { MovieList } from '../../containers';


const url = `http://www.omdbapi.com/?apikey=925eba28&s=`;


export const Cinemapp = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ input, setInput ] = useState('');
    const [ movie, setMovie ] = useState('batman');
    const [ movieList, setMovieList ] = useState([]);


    const renderComponents = () => {

        if (isLoading) {
            return <Loading />;
        } else {
            return <MovieList movieList={movieList} />;
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        
        setInput(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        setMovie(input);
        
        console.log(movie);
        console.log(`${url}${movie}`);
    };


    const fetchMovieList = async(mov) => {
        setIsLoading(true);

        try {
            const response = await fetch(`${url}${mov}`);
            const tempMovieList = await response.json();

            console.log(tempMovieList);
            setMovieList(tempMovieList);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    };


    useEffect((movie) => {
        fetchMovieList(movie);
    }, [movie]);



    return (
        <main className="main-cinema">
            <header className="header-cinema">
                <h1>Cinema App</h1>
                <p>Bem-vindo ao mundo espetacular do cinema</p>
            </header>

            <section>
                <input 
                    type="text" 
                    name="input" 
                    id="input" 
                    placeholder="O que você busca..."
                    onChange={handleChange}
                    required
                 />

                <button type="submit" onClick={handleSubmit} >Buscar</button>

                <hr />

                {renderComponents()}

            </section>
        </main>
    );
};




