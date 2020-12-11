import React, { useState } from 'react';
import axios from 'axios';

import Form from '../form/form.jsx';
import Location from '../location/location.jsx';
import Spinner from '../spinner/spinner.jsx';
import { areas, sleeper } from '../../utils/constants.js';
import './main.scss';


export default function Main() {


    const [state, setState] = useState({
        location: {
            address: '',
            lat: '',
            lon: '',
        }
    });


    const handleFormSubmit = (query) => {
       
        const key = process.env.REACT_APP_LOCATION_KEY;
        const city = query;
        const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;

        const locationBody = {}

        axios.get(url)
            .then(sleeper(3000, areas.location))
            .then((response) => {

                console.log(response.data[0])

                const {display_name, lat, lon } = response.data[0];
                locationBody.address = display_name;
                locationBody.lat = lat;
                locationBody.lon = lon;
                
            });
        

        setState({
            ...state,
            location: locationBody,
        });
    
    }     
                

    return (
        <main>
            Main Body Element
            <Form handleFormSubmit={ handleFormSubmit }/>
            <Location display={ state.isLocationActive } location={ state.location } />
            <Spinner area={ areas.weather }/>
        </main>
    )

}