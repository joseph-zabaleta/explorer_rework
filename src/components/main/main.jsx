import React, { useState } from 'react';
import axios from 'axios'

import Form from '../form/form.jsx';
import Location from '../location/location.jsx';
import Trails from '../trails/trails.jsx';
import Spinner from '../spinner/spinner.jsx';
import { trackPromise } from 'react-promise-tracker';
import { areas, sleeper } from '../../utils/constants.js';
import './main.scss';


//dummy data
// const location = {
//     display_name: "Vancouver, Clark County, Washington, USA",
//     lat: "45.6306954",
//     lon: "-122.6744557"
// }

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

    }

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
                </React.Fragment>
            }


        </main>
    )

}