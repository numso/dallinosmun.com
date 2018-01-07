import { ApolloClient, createNetworkInterface } from 'react-apollo'

let apolloClient = null

function _initClient (headers, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    networkInterface: createNetworkInterface({
      uri: 'https://api.bydall.in/graphql',
      opts: {
        credentials: 'include',
        headers: { cookie: headers.cookie }
      }
    })
  })
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return _initClient(headers, initialState)
  }
  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState)
  }
  return apolloClient
}
