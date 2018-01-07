import 'isomorphic-fetch'
import React from 'react'
import { ApolloProvider, getDataFromTree, gql } from 'react-apollo'

import { initClient } from './init-client'

const CurrentUserQuery = gql`
  query CurrentUserQuery {
    currentUser {
      id
      firstname
      lastname
      email
      username
      role
    }
  }
`

export default (Component, maybeRedirect) =>
  class withData extends React.Component {
    static async getInitialProps (ctx) {
      const headers = ctx.req ? ctx.req.headers : {}
      const client = initClient(headers)

      const resp = await client.query({ query: CurrentUserQuery })
      const checkRedirect = maybeRedirect || Component.maybeRedirect
      if (checkRedirect) {
        const path = checkRedirect(resp.data.currentUser)
        if (path) {
          if (ctx.res) {
            ctx.res.writeHead(302, { Location: path })
            ctx.res.end()
          } else {
            document.location.pathname = path
          }
          return {}
        }
      }

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...(await (Component.getInitialProps
          ? Component.getInitialProps(ctx)
          : {}))
      }

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client}>
            <Component {...props} />
          </ApolloProvider>
        )
        await getDataFromTree(app)
      }

      return {
        initialState: {
          apollo: {
            data: client.getInitialState().data
          }
        },
        headers,
        ...props
      }
    }

    constructor (props) {
      super(props)
      this.client = initClient(this.props.headers, this.props.initialState)
    }

    render () {
      return (
        <ApolloProvider client={this.client}>
          <Component {...this.props} />
        </ApolloProvider>
      )
    }
  }
