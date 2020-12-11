import React from 'react';
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

import './spinner.scss';

export default function Spinner({ area }) {

    const { promiseInProgress } = usePromiseTracker({ area });

    return (
        promiseInProgress && (
        <div id='#container'>
            <Loader 
                type="ThreeDots" 
                color="#2BAD60" 
                height="100" 
                width="100" />
            <h4>Loading in Progress...</h4>
        </div>
        )
    )

}

