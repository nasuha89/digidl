import React from 'react';
import propTypes from 'prop-types';
import './statusmessage.css';
import Icon from './Icon';

export default function StatusMessage ({ label, state }) {
    return (
        <div className={`contained-${state} alert-contained`}
        role="alert">
        <span className={`icon-${state} alert-icon`}><Icon icon={state} size={18} /></span>
        {label}
        </div>
    );
}

StatusMessage.propTypes = {
    label: propTypes.string.isRequired,
    state: propTypes.oneOf(['success','danger','warning']),
};
