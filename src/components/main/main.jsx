import React, { useState } from 'react';
import axios from 'axios';

import Form from '../form/form.jsx';
import Location from '../location/location.jsx';
import './main.scss';

export default function Main() {



    return (
        <main>
            <Form />
            Main Body Element
            <Location />
        </main>
    )

}