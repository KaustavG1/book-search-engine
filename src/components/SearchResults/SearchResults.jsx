import BookCard from "../BookCard/BookCard"
import './SearchResults.css'

export default function SearchResults({searchData}) {
  const resultText = Object.keys(searchData).length ? `Showing results for ${searchData?.q}` : 'Search here'
  return (
    <>
      <div>{resultText}</div>
      <div className="container">
        {searchData?.docs?.map(({key, title, cover_i}) => (
          <BookCard
            key={key}
            book_id={key}
            title={title}
            id={cover_i}
          />
        ))}
      </div>
    </>
  )
}
