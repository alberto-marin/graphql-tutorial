import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

import { getAuthorsQuery, addBookMutation } from '../queries/queries';

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

    console.log(formData);
  };

  return (
    <form id='add-book' onSubmit={handleForm}>
      <div className='field'>
        <label htmlFor=''>Book name:</label>
        <input
          type='text'
          name=''
          id=''
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className='field'>
        <label htmlFor=''>Genre:</label>
        <input
          type='text'
          name=''
          id=''
          onChange={e => setGenre(e.target.value)}
        />
      </div>
      <div className='field'>
        <label htmlFor=''>Author:</label>
        <select name='' id='' onChange={e => setAuthorId(e.target.value)}>
          <option value=''>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
