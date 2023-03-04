import { useState } from "react"
import axios from 'axios'
import baseURL from '../../constants/baseURL'
import './SearchBar.css'

export default function SearchBar({passData, setLoading}) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    // get data from api and pass to parent page
    try {
      setLoading(true)
      const res = await axios.get(`${baseURL}${searchTerm.split(" ").join("+").toLowerCase()}`)
      const data = await res?.data
      passData(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-field"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Enter search term"
      />
      <button type="submit" className="submit">
        Search
      </button>
    </form>
  )
}
