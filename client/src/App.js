import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// components
import BookList from './components/BookList';
import Header from './components/Header';
import Footer from './components/Footer';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <BookList />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
