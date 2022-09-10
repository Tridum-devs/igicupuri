import { gql } from 'apollo-server-express'

const schema = gql`
  type Query {
    welcome: String!
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }
`

export default [schema]
