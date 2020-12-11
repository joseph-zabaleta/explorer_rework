import { trackPromise } from 'react-promise-tracker';

/**
 * Constant area id's to use for different loading spinners
 */
export const areas = {
    location: 'location-area',
    weather: 'weather-area',
    trails: 'trails-area',
};

/**
 * Sleeper function used to delay the API requests for loading spinner component
 * @param {*} ms milli-seconds to delay
 * @param {*} area area / id to give that promise to have multiple delays in your project
 */
export const sleeper = (ms, area) => {

    return function(x) {
      return trackPromise( new Promise(resolve => setTimeout(() => resolve(x), ms)), area);
    };

};