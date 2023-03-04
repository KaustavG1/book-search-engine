import { baseCoverURL } from '../../constants/baseURL'
import { useNavigate } from "react-router-dom"
import './BookCard.css'

export default function BookCard({title, id, book_id}) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`${book_id}`)
  }

  return (
    <div className="wrapper" onClick={handleClick}>
      <div className='title'>{title}</div>
      <img
        src={`${baseCoverURL}${id}-M.jpg`}
        className='cover'
      />
    </div>
  )
}
