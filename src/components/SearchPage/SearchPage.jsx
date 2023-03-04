import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import { useNavigate } from "react-router-dom"
import './SearchPage.css'

export default function SearchPage() {
  let navigate = useNavigate();

  const [searchData, setSearchData] = useState({})
  const [isLoading, setLoading] = useState(false)

  const handleClick = () => navigate('custom-search')

  return (
    <div className="search-page">
      <button className="search-toggle" onClick={handleClick}>Custom Search</button>
      <SearchBar passData={setSearchData} setLoading={setLoading}/>
      {isLoading
        ? <div>Loading data...</div>
        : <SearchResults searchData={searchData}/>
      }
    </div>
  )
}
