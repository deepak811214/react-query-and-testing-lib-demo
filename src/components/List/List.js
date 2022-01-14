import React from 'react'
import Card from '../Card/Card'
import "./List.css"

function List(data) {
  return (
    <div className="list-container">
      {
        data.results?.length > 0
          ? data.results
            .filter((item) => item?.media_type !== "person")
            .map((movie) => <Card key={movie.id} {...movie} selectedGenre={data.selectedGenre}></Card>)
          : (<div className="no-match">
            <h2>No match found</h2>
            <h4>Change you filter and Try again</h4>
          </div>)
      }
    </div>
  )
}

export default React.memo(List)
