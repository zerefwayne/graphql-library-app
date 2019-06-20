import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {

    constructor(props){
      super(props);
      this.state = {
        selected: null
      }
    };

    displayBooks() {
      let data = this.props.data;

      if(data.loading){
        return (
          <div>Loading books...</div>
        );
      } else {

          return data.books.map((book) => {
            return (
            <li className="list-group-item" style={{ cursor: 'pointer' }} key={book.id} onClick={ (e) => { this.setState({selected: book.id}); setTimeout(() => {console.log(this.state);}, 1 ) }}>
              { book.name }
            </li>
          );
          });

      }

    }

    render() {

      return (
          <div>
            <div>
              <ul className="list-group">
                { this.displayBooks() }
              </ul>
            </div>
            <div>
              <h3 className="mt-4 mb-3">Book Details</h3>
              <BookDetails bookId = {this.state.selected}/>
            </div>
          </div>

      );
    }
  }

  export default graphql(getBooksQuery)(BookList);