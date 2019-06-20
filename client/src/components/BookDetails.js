import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

    displayBookDetails() {

        const { book } = this.props.data;

       if(book){

            return(

                <div>

                    <h4>{book.name}</h4>
                    <p>Author: {book.author.name}</p>
                    <p>Genre: {book.genre}</p>

                    <small>Other books by author</small>



                </div>

            )

       } else {

        return (
            <div>No book selected</div>
        );

       }

    }

    render() {

        return (
            <div className="card">
                <div className="container mt-3 mb-3">
                    {this.displayBookDetails()}
                </div>
            </div>
        );

    }

}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
         }
    }
})(BookDetails);