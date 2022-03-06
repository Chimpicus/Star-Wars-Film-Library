import '../styles/home.scss'
import React from 'react';
import useFetch from '../requests/useFetch';
import FilmList from './FilmList';



const Home= () => {
    const { data: films, isPending, error } = useFetch('http://localhost:8000/films');
    return (
        <div className="home home-lightside">
            {error}
            {isPending && <div>Loading...</div>}
            {films && <FilmList films={films} title="All Films" />}
        </div>
    );
};

export default Home;
