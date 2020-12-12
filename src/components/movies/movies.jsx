import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { areas } from '../../utils/constants.js';
import { ReactComponent as Logo } from '../../assets/movieLogo.svg';
import Spinner from '../spinner/spinner.jsx';
import './movies.scss';

export default function Movies({ location }) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const key = process.env.REACT_APP_MOVIES_KEY;
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&region=${location.region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

        trackPromise(axios.get(url)
            .then(setIsLoading(true))
            .then((response) => {
                setMovies(response.data.results);
            })
            .then(setIsLoading(false)), areas.movies);

    }, [location.address, location.region]);
   
    if (isLoading || !movies.length) return <Spinner area={areas.movies} />

    return (

        <div id="moviesContainer">

            <p style={{textAlign: 'center'}}>
                Movies Component
            </p>

            <br />
            <Logo />
            <br />
            <br />

            {movies.map((movie) => (

                <div key={movie.id}>
                    <p>
                        <span>
                            {movie.id}
                        </span>
                        <span style={{paddingLeft: '20px'}}>
                            {movie.original_title}
                        </span>
                    </p>
                </div>
            ))}

        </div>

    )

}