import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

interface QueryProviderProps {
  children: JSX.Element | JSX.Element[];
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default QueryProvider;
