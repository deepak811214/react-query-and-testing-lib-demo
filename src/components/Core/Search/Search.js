import React, { useState } from 'react'
import "./Search.css"

function Search({ handleSearch }) {
  const [value, setValue] = useState("");
  const handleSearchData = () => {
    let data = value;
    handleSearch(data);
    setValue("");
  }
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearchData()
    }
  }
  return (
    <div className="search-container">
      <input type="text" className="search" data-testid="searchBox" placeholder="search" value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={handleEnter}></input>
      <button className="searchIcon" data-testid="searchBtn" onClick={handleSearchData}><i className="fa fa-search"></i></button>
    </div>
  )
}

export default Search
