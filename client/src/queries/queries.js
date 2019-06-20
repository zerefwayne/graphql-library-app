import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books{
      name
      id
      genre
    }
  }
`

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`

const getBookQuery = gql`
  query($id: ID!){
      book(id: $id){
          id
          name

      }
  }
`

export { getBooksQuery, getAuthorsQuery, getBookQuery };