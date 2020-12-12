import React, { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { areas } from '../../utils/constants.js';
import Spinner from '../spinner/spinner.jsx';
import axios from 'axios';

import './trails.scss';

export default function Trails({ location }) {

    
    const [trails, setTrails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const key = process.env.REACT_APP_TRAILS_KEY;
        const url = `https://www.hikingproject.com/data/get-trails?lat=${location.lat}&lon=${location.lon}&maxDistance=10&key=${key}`

        trackPromise(axios.get(url)
            .then(setIsLoading(true))
            .then((response) => {
                setTrails(response.data.trails);
            })
            .then(setIsLoading(false)), areas.trails);

    }, [location.lat, location.lon]);


    if (isLoading || !trails.length) return <Spinner area={areas.trails} />;

    return (
       
        <div id="trailsContainer">

            <p style={{textAlign: 'center'}}>
                Trails Component
            </p>

            <br />

            {trails.map((trail) => (

                <div key={trail.id}>
                    <p>
                        <span>
                            {trail.id}
                        </span>
                        <span style={{paddingLeft: '20px'}}>
                            {trail.name}
                        </span>
                    </p>
                </div>
            ))

            }

        </div>

    )

}