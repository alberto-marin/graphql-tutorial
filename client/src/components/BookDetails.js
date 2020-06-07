import React from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

function BookDetails(props) {
  //console.log(props);
  const { book } = props.data;
  function displayBookDetails() {
    if (!book) {
      return (
        <div className='alert alert-info' role='alert'>
          Select a book from the list to see more details
        </div>
      );
    } else {
      return (
        <div className='card'>
          <div className='card-header'>Book</div>
          <div className='card-body'>
            <h5 className='card-title'>{book.name}</h5>
            <p className='card-text'>Genre: {book.genre}</p>
            <p className='card-text'>Books by {book.author.name}:</p>
            <ul className='list-group list-group-flush'>
              {book.author.books.map(item => {
                return (
                  <li key={item.id} className='list-group-item'>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
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
