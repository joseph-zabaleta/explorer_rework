import React from 'react';
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

import './spinner.scss';

export default function Spinner({ area }) {

    const { promiseInProgress } = usePromiseTracker({ area });

    return (
        promiseInProgress && (
        <div id='spinnerContainer'>
            <Loader 
                type="ThreeDots" 
                color="green"
                secondaryColor="#bab7b6"
                height="25" 
                width="300" />

        </div>
        )
    )

}

