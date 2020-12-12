import React from 'react';

import './location.scss';


export default function Location({ location }) {

    return (
        
        <div id="locationContainer">
            <p style={{textAlign: 'center'}}>
                Location Component
            </p>
            <br></br>
            <p>Name: {location.address}</p>
            <br></br>
            <p>
                <span>Lat: {location.lat}</span>
                <span style={{paddingLeft: '20px'}}>Lon: {location.lon}</span>
            </p>
        </div>

    )

};