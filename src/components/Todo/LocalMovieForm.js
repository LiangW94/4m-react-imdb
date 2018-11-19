import React from 'react';
import TextInput from '../Common/TextInput';

const LocalMovieForm = ({ movie, onSave, onChange, formTitle, buttonValue }) => {
    return (
        <form style={{ margin: '160px auto', maxWidth: '30%' }}>
            <h3>{formTitle}</h3>
            <TextInput
                name="Title"
                label="Title"
                placeholder="Title"
                value={movie.Title}
                onChange={onChange}
            />
            <TextInput
                name="Year"
                label="Year"
                placeholder="Year"
                value={movie.Year}
                onChange={onChange}
            />
            <TextInput
                name="Director"
                label="Director"
                placeholder="Director"
                value={movie.Director}
                onChange={onChange}
            />
            <TextInput
                name="Country"
                label="Country"
                placeholder="Country"
                value={movie.Country}
                onChange={onChange}
            />
            <input
                type="submit"
                value={buttonValue}
                className="btn btn-secondary"
                onClick={onSave} />
        </form>
    );
};


export default LocalMovieForm;
