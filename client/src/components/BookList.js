import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';

import { getBooksQuery } from '../queries/queries';
import AddBook from './AddBook';
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
    <Container className='my-3'>
      <Tab.Container id='list-group-tabs-example' defaultActiveKey=''>
        <Row>
          <Col md={4}>
            <ListGroup>
              {data.books.map(book => {
                return (
                  <ListGroup.Item
                    action
                    href={`#list-${book.id}`}
                    key={book.id}
                    onClick={() => setSelected(book.id)}
                  >
                    {book.name}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col md={4}>
            <Tab.Content>
              {data.books.map(book => {
                return (
                  <Tab.Pane
                    eventKey={`list-${book.id}`}
                    key={book.id}
                  ></Tab.Pane>
                );
              })}
              <BookDetails bookId={selected} />
            </Tab.Content>
          </Col>
          <Col md={4}>
            <AddBook />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
// bind this query to this component
export default graphql(getBooksQuery)(BookList);
