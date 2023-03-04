import { baseCoverURL } from '../../constants/baseURL'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css'

export default function Details() {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`https://openlibrary.org/works/${id}.json`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(setLoading(false))
  }, [])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <div className='details-wrapper'>
        <div className='title'>{data?.title}</div>
        {data?.covers && <img src={`${baseCoverURL}${data?.covers[0]}-L.jpg`} />}
        <p>{data?.description}</p>
      </div>}
    </>
  )
}
