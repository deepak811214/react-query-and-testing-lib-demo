import React from 'react'
import Dropdown from "../Core/Dropdown/Dropdown"
import Daterange from '../Core/Daterange/Daterange'
import Rating from '../Core/Rating/Rating'
import "./Sidebar.css"
import { GenreList, MediaType, withGenre, mediaTypeKey, ratingGreaterThan } from "../../utils/constants";

function SideBar({ handleFilter, genreName, mediaTypeValue, startYear, endYear }) {

  return (
    <div className="sidebar-container">
      <div className="filter-heading">DISCOVER OPTIONS</div>
      <Dropdown label="Type" data={MediaType} placeholder={mediaTypeValue} handleFilter={handleFilter} type={mediaTypeKey} />
      <Dropdown label="Genre" data={GenreList} placeholder={genreName} handleFilter={handleFilter} type={withGenre} />
      <Daterange label="Year" min={startYear} max={endYear} handleFilter={handleFilter}></Daterange>
      <Rating label="Rating" handleFilter={handleFilter} type={ratingGreaterThan} />
    </div>
  )
}

export default SideBar
