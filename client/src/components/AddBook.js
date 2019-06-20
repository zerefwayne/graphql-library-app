import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { getBooksQuery, getAuthorsQuery } from '../queries/queries';
import { addBookMutation } from '../queries/mutations';

class AddBook extends Component {

    constructor(props){

        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }

    }

    displayAuthors() {

        let data = this.props.getAuthorsQuery;

        if(data.loading){
            return (
                <option disabled>Loading authors</option>
            );
        } else {

            return data.authors.map((author) => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            });

        }

    }

    submitForm(e) {

        e.preventDefault();

        if(this.state.name.length > 0 && this.state.genre.length > 0 && this.state.authorId.length > 0) {

            this.props.addBookMutation({
                variables: {
                    name: this.state.name,
                    genre: this.state.genre,
                    authorId: this.state.authorId
                },
                refetchQueries: [
                    {
                        query: getBooksQuery
                    }
                ]
            });

        }

    }

    render() {

      return (
        <div className="card">
        <div className="container mt-3 mb-3">
        <form id="add-book" onSubmit={ this.submitForm.bind(this) }>

        <div className="form-group">
          <label>Book name:</label>
          <input className="form-control" type="text" onChange={ (e) => { this.setState({ name: e.target.value }) } }/>
        </div>

        <div className="form-group">
          <label>Genre:</label>
          <input className="form-control" type="text" onChange={ (e) => { this.setState({ genre: e.target.value }) } }/>
        </div>

        <div className="form-group">
          <label>Author:</label>
          <select className="form-control" onChange={ (e) => { this.setState({ authorId: e.target.value }) } }>
            <option>Select an author</option>
            { this.displayAuthors() }
          </select>
        </div>

        <button className="btn btn-success">Add Book</button>

      </form>
      </div>
      </div>
      );
    }

}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);