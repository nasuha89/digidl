import React from 'react';
import propTypes from 'prop-types';
import './label.css';

export default function Label ({ label, color }) {
    return (
        <span class={`badge-${color} badge`}>{label}</span>
    );
}

Label.propTypes = {
    label: propTypes.string,
    color: propTypes.oneOf(['primary','secondary','success','danger','warning','info','light','dark']),
};
