import React, { useState } from 'react';

import './form.scss';

export default function Form() {

    const [query, setQuery] = useState('');

    const handleChange = (event) => {

        setQuery(event.target.value);

    }

    function handleSubmit (event) {

        event.preventDefault();
        // query location service get lon and lat to pass to other services
        // const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;

    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>Search your city: </label>
            <input type="text" id="searchQuery" name="searchQuery" onChange={handleChange} />
            <button type="submit"> Search </button>
        </form>
    )

}