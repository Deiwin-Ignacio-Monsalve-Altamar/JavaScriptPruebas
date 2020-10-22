import React from 'react';

import PropTypes from 'prop-types'

import '../assets/components/CarouselItem.scss'
import PlayIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration}) =>{
    return(
        <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon" /> 
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
          </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
      </div>
    )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselItem;