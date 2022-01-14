import React from 'react';
import "./Card.css";
import { IMAGE_BASE_URL, GenreList } from "../../utils/constants"

function Card({ title, release_date, poster_path, genre_ids, name, selectedGenre }) {
  const year = release_date?.split("-")[0]

  //Finding genre value on basis of its id.
  const genreId = genre_ids?.indexOf(Number(selectedGenre)) > -1 ? Number(selectedGenre) : genre_ids?.[0]
  const genre = genreId && GenreList.find(genre => genre.id === genreId)?.name

  return (
    <div className="card-container" data-testid="media-item">
      <div className="image">
        <img loading="lazy" alt={title || name} src={`${IMAGE_BASE_URL}${poster_path}`}></img>
      </div>
      <div className="title" data-testid="title">{title || name}</div>
      <div>{genre}{genre && year && ","} {year}</div>
    </div>
  )
}

export default Card
