import React from 'react';
import propTypes from 'prop-types';
import './inputfield.css'

export default function InputField ({ title, text, placeholder, type, width }) {
    return (
        <div className ="input-container">
            <span className ="input-title">{title}</span><br/>
            <input style={width && { width }} className ="input-field" type={type} value={text} placeholder={placeholder} />
        </div>
    );
}

InputField.propTypes = {
    title: propTypes.string,
    text: propTypes.string,
    placeholder: propTypes.string,
    type: propTypes.oneOf(['text', 'password']),
    /**
    * Enter width of input field with measurement unit
    */
    width: propTypes.string,
}

