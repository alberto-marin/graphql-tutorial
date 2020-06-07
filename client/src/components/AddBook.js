import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from '../queries/queries';

function AddBook(props) {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  var data = props.getAuthorsQuery;
  function displayAuthors() {
    if (data.loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option value={author.id} key={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  const handleForm = e => {
    e.preventDefault();
    let formData = { name, genre, authorId };
    //console.log(formData);
    props.addBookMutation({
      variables: formData,
      refetchQueries: [{ query: getBooksQuery }] // reload the BookList
    });
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <form id='add-book' onSubmit={handleForm}>
          <div className='form-group'>
            <label htmlFor='book-name'>Book name:</label>
            <input
              className='form-control'
              type='text'
              id='book-name'
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='book-genre'>Genre:</label>
            <input
              className='form-control'
              type='text'
              id='book-genre'
              onChange={e => setGenre(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='author'>Author:</label>
            <select
              id='author'
              className='form-control'
              onChange={e => setAuthorId(e.target.value)}
            >
              <option value=''>Select author</option>
              {displayAuthors()}
            </select>
          </div>
          <button className='btn btn-primary'>Save book</button>
        </form>
      </div>
    </div>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
