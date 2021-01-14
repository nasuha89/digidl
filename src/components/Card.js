import React from 'react';
import propTypes from 'prop-types';
import './card.css';
import Icon from './Icon';

export default function Card ({ title, subtitle, footer, content, width, elevation, TopIcon, error, FullThumbnail, thumbnail }) {
    
    if (FullThumbnail) {
        return (
            <div className={`card-${elevation} card`} style={width && { width }}>
                <img className="card-img-top" src={thumbnail}></img>
                <div className="card-body">
                    <p className="card-text"><strong>{content}</strong></p>
                </div>
                <div className="card-footer">{footer}</div>
            </div>
        );
    }
    
    return (
        <div className={`card-${elevation} card`} style={width && { width }}>
            <div className="card-header">
                <p className="card-subtitle">{subtitle}</p>
                <h5>{title}</h5>
                <div className="card-top-right">
                    <span><Icon icon={TopIcon} size={28}/></span>
                </div>
            </div>
            <div className="card-body">
                {content}
                <div style= {{color: "#F06161", marginTop:"0.5rem"}}>{error}</div>
            </div>
            <div className="card-footer">{footer}</div>
        </div>
    );

}

Card.propTypes = {
    subtitle: propTypes.string,
    title: propTypes.string,
    footer: propTypes.node,
    content: propTypes.string,
    width: propTypes.string,
    TopIcon: propTypes.string,
    error: propTypes.string,
    elevation: propTypes.oneOf(['shadow', 'outline']),
    FullThumbnail: propTypes.bool,
    thumbnail: propTypes.string,

};