import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./Rating.css"

const Rating = ({ type, handleFilter }) => {
  const newRating = (rating) => {
    handleFilter({ "name": type, "id": rating * 2 })
  }
  return (
    <div className="rating">
      <label>Rating</label>
      <ReactStars
        count={5}
        onChange={newRating}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </div>
  )
}




export default Rating
