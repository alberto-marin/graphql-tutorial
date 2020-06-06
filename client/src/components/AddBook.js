import React from 'react';
import { graphql } from 'react-apollo';

import { getAuthorsQuery } from '../queries/queries';

function AddBook(props) {
  var data = props.data;
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

  return (
    <form id='add-book'>
      <div className='field'>
        <label htmlFor=''>Book name:</label>
        <input type='text' name='' id='' />
      </div>
      <div className='field'>
        <label htmlFor=''>Genre:</label>
        <input type='text' name='' id='' />
      </div>
      <div className='field'>
        <label htmlFor=''>Author:</label>
        <select name='' id=''>
          <option value=''>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default graphql(getAuthorsQuery)(AddBook);
