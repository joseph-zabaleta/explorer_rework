import React from 'react';

import Spinner from '../spinner/spinner.jsx';
import { areas } from '../../utils/constants.js';
import './location.scss';

export default function Location({ location }) {

    return (
        
        <div className='locationContainer'>
            Location Component
            <Spinner area={ areas.location }/>
        </div> 

    )

}