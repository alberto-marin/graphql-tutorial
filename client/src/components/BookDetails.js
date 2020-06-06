import React from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

function BookDetails(props) {
  //console.log(props);
  const { book } = props.data;
  function displayBookDetails() {
    if (!book) {
      return <p>No book selected</p>;
    } else {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <h3>All books by this author:</h3>
          <ul className='other-books'>
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    }
  }
  return <div id='book-details'>{displayBookDetails()}</div>;
}
// bind this query to this component
export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
