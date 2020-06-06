import React, { useState } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

function BookList(props) {
  const [selected, setSelected] = useState(null);

  var data = props.data;
  //console.log(props);

  if (data.loading || data === undefined) {
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
          return (
            <li key={book.id} onClick={() => setSelected(book.id)}>
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}
// bind this query to this component
export default graphql(getBooksQuery)(BookList);
