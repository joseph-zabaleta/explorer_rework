import React from 'react';

import './form.scss';

export default function Form() {

    return (
        <form>
            <label>Search your city: </label>
            <input type="text" id="searchQuery" name="searchQuery" />
            <button type="submit"> Search </button>
        </form>
    )

}