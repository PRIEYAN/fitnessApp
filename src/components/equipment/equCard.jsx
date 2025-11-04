import React from 'react';
import { FaStar } from 'react-icons/fa';
import './equCard.css';
import PropTypes from 'prop-types';

const EquCard = ({ image, name, description, rating, price }) => {
    return (
        <div className="equ-card">
            <div className="equ-card-image">
                <img src={image} alt={name} />
            </div>
            <div className="equ-card-content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{rating} Rating</span>
                </div>
                <div className="price-row">
                    <h3>${price}</h3>
                </div>
            </div>
        </div>
    );
};

export const CatCard = ({image,title})=>{
    return(
        <div className="equ-card"><br />
            <div className="equ-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

CatCard.propTypes = {
    image: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

EquCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

export default EquCard;