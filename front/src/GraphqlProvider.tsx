import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

let uri: string
uri = 'http://localhost:4000/graphql'

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
})

const GraphqlProvider: React.FC<{
  children: any
}> = (props) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export default GraphqlProvider
