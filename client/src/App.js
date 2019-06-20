import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1 className="text-center pt-3 pb-3">GraphQL Library</h1>
        <div className="container mt-4">
          <div className="row">
            <div className="col col-lg-6">
              <h3 className="mb-3">Books List</h3>
              <BookList />


            </div>
              <div className="col col-lg-6">
                <h3 className="mb-3">Add Book</h3>
                <AddBook />
              </div>
            </div>

        </div>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
