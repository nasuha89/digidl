import React from 'react';
import propTypes from 'prop-types';
import './checkbox.css';

export default function Checkbox ({ label, disabled }) {

    if (disabled) {
        return (
            <label className="container">
                {label}
                <input type="checkbox" id="checkbox1" value="Item 1" disabled></input>
                <span className="checkmark"></span>
            </label>
        );
    }

    return (
        <label className="container">
            {label}
            <input type="checkbox" id="checkbox1" value="Item 1"></input>
            <span className="checkmark"></span>
        </label>
    );

}

Checkbox.propTypes = {
    label: propTypes.string,
    disabled: propTypes.bool,
};

