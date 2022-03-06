import '../styles/filmList.scss'
import React from 'react';
import { Link } from 'react-router-dom';


const FilmList = ({ films, title }) => {
    return (
        <div className="filmList">
            <h2 className="title">{title}</h2>
            {films.map((film) => (
                <div className="filmList-preview" key={film.id}>
                    <img className="filmList-preview-poster" src={`${film.imageURL}`} alt={`${film.title} poster`} />
                    <Link to={`/films/${film.id}`}>
                        <h2 className="filmList-preview-title">{film.title}</h2>
                        <div className="filmList-preview-info">
                            <p>Era: {film.era}</p>
                        </div>
                        
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FilmList;
