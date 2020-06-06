import React from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';

function BookList(props) {
  var data = props.data;
  if (data.loading) {
    return (
      <div className='loading'>
        <p>Loading books...</p>
      </div>
    );
  }
  if (data.error) {
    return (
      <div className='error'>
        <p>Error: {data.error}</p>
      </div>
    );
  }
  return (
    <div>
      <ul id='book-list'>
        {data.books.map(book => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}
// bind this query to this component
export default graphql(getBooksQuery)(BookList);
