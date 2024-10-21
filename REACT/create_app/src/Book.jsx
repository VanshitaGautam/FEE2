import React from 'react'
import "./Book.css"
const Book = (props) => {
  return (
    <div className='books'>
    <h1>name:{props.name}</h1>
    <h2> age:{props.author}</h2>
    <h3>color:{props.description}</h3>
    </div>
  )
}

export default Book
