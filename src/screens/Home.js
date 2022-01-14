import React, { useState, useEffect } from 'react'
import List from "../components/List/List";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar"
import Search from '../components/Core/Search/Search'
import useGetData from '../hooks/useGetData';
import { getDate } from "../utils/getDateFormat";
import {
  TOP_RATED, NEWEST, TREND, SORT_BY_NEWEST, SORT_BY_POPULAR, SORT_BY_TREND, SORT_BY_TOPRATED,
  sortByKey, releaseDateGreaterThan, releaseDateLessThan, withGenre, ratingGreaterThan, mediaTypeKey, GenreList
} from '../utils/constants';


function Home(props) {
  const sortBy = props?.match?.params?.sortBy;
  let [mediaTypeValue, setFilterBy] = useState("movie")
  let [searchText, setSearchText] = useState("")
  const [payload, setPayload] = useState({
    [sortByKey]: SORT_BY_POPULAR,
    [releaseDateGreaterThan]: getDate(2020),
    [releaseDateLessThan]: getDate(),
    [withGenre]: 28,
    [ratingGreaterThan]: 0
  })
  const genreName = GenreList.find(genre => genre.id === Number(payload[withGenre])).name

  useEffect(() => {
    setPayloadBySortBy(sortBy)
  }, [sortBy])


  // Fetched data using React Query
  const { data, isLoading } = useGetData(mediaTypeValue, payload, searchText)

  const handleFilter = (filter) => {
    if (filter.name === mediaTypeKey) {
      setFilterBy(filter.value)
    } else {
      setPayload({ ...payload, [filter.name]: filter.id })
    }
    setSearchText("");
  }

  const setPayloadBySortBy = (sortBy) => {
    if (sortBy === NEWEST) {
      setPayload({ ...payload, "sort_by": SORT_BY_NEWEST })
    } else if (sortBy === TOP_RATED) {
      setPayload({ ...payload, "sort_by": SORT_BY_TOPRATED })
    } else if (sortBy === TREND) {
      setPayload({ ...payload, "sort_by": SORT_BY_TREND })
    } else {
      setPayload({ ...payload, "sort_by": SORT_BY_POPULAR })
    }
  }

  return (
    <div className="container">
      <div className="left-content">
        <div className="header">
          <h1>Discover</h1>
          <Navbar />
          <Search handleSearch={(text) => setSearchText(text)} />
        </div>
        {isLoading ? <h2 className="loader">Loading...</h2> : <List {...data} selectedGenre={payload[withGenre]} />}
      </div>
      <div className="right-content">
        <Sidebar handleFilter={handleFilter} startYear={payload[releaseDateGreaterThan]} endYear={payload[releaseDateLessThan]} rating={payload[ratingGreaterThan]} genreName={genreName} mediaTypeValue={mediaTypeValue} />
      </div>
    </div>
  )
}

export default Home
