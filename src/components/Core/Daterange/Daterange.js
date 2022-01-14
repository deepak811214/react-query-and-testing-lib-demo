import React from 'react'
import Dropdown from "../Dropdown/Dropdown"
import "./Daterange.css"
import { releaseDateGreaterThan, releaseDateLessThan } from "../../../utils/constants";
import { getDate } from "../../../utils/getDateFormat";

function Daterange({ min, max, handleFilter }) {
  const minYear = min.split("-")[0]
  const maxYear = max.split("-")[0]
  const yearArr = Array.from({ length: new Date().getFullYear() - 1980 }, (x, i) => new Date().getFullYear() - i)
  const data = [];
  yearArr.forEach(year => data.push({ id: getDate(year), name: year }))

  return (
    <div className="daterange">
      <Dropdown label="Year" type={releaseDateGreaterThan} data={data} placeholder={minYear} handleFilter={handleFilter} width={70} />
      <div className="separator">-</div>
      <Dropdown type={releaseDateLessThan} data={data} placeholder={maxYear} handleFilter={handleFilter} width={70} />
    </div>
  )
}

export default Daterange
