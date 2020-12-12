import React, { useState } from 'react';
import axios from 'axios'

import Form from '../form/form.jsx';
import Location from '../location/location.jsx';
import Trails from '../trails/trails.jsx';
import Movies from '../movies/movies.jsx';
import Spinner from '../spinner/spinner.jsx';
import { areas, sleeper } from '../../utils/constants.js';
import './main.scss';


export default function Main() {
    
    const [target, setTarget] = useState({});
    const [viewComponent, setViewComponent] = useState(false);
    

    const handleFormSubmit = (input) => {
    
        const key = process.env.REACT_APP_LOCATION_KEY;
        const city = 'vancouver, wa';
        const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;

    

        axios.get(url)
            .then(setViewComponent(false))
            .then(sleeper(3000, areas.default))
            .then((response) => {
    
                const {display_name, lat, lon} = response.data[0];

                setTarget({
                    ...target,
                    address: display_name,
                    region: 'US',
                    lat,
                    lon,
                }); 
            })
            .then(() => {
                setViewComponent(true);
            })
            .catch((error) => {
                console.error(error);
            });

    };


    return (
        <main>
            <p style={{textAlign: 'center'}}>
                Main Body Element
            </p>
            <Form handleFormSubmit={ handleFormSubmit }/>

            <Spinner area={areas.default} />

            {viewComponent && 
                <React.Fragment>
                    <Location location={target} />
                    <Trails location={target} />
                    <Movies location={target} />
                </React.Fragment>
            }


        </main>
    )

}