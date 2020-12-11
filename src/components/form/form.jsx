import React, { useState } from 'react';

import './form.scss';

export default function Form({ handleFormSubmit }) {

    const [query, setQuery] = useState('');

    const handleChange = (event) => {

        setQuery(event.target.value);

    }

    function handleSubmit (event) {

        event.preventDefault();
        handleFormSubmit(query);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search your city: </label>
            <input type="text" id="searchQuery" name="searchQuery" onChange={handleChange} />
            <button type="submit"> Search </button>
        </form>
    )

}