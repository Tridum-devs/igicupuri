import { gql } from 'apollo-server-express';
//random
const schema = gql`
	type Query {
		welcome: String!
	}
`;

export default [schema];
