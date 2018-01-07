import qs from 'querystring'
import React from 'react'
import { gql, graphql } from 'react-apollo'

import App from '../components/app'
import Field from '../components/field'
import withData from '../lib/with-data'

const LoginMutation = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`

function maybeRedirect (curUser) {
  if (curUser) return '/logged-in'
}

class Auth extends React.Component {
  state = {
    error: '',
    username: '',
    password: ''
  }

  maybeHandleLogin = e => {
    if (e.keyCode === 13) {
      this.handleLogin()
    }
  }

  handleLogin = async () => {
    const { username, password } = this.state
    if (!username) return this.setState({ error: 'Username is required' })
    if (!password) return this.setState({ error: 'Password is required' })
    this.setState({ error: '' })
    const opts = { variables: { username, password } }
    const resp = await this.props.mutate(opts).then(r => r.data.login)
    if (resp !== 'ok') return this.setState({ error: resp })
    const query = qs.parse(window.location.search.substr(1))
    if (query.redirect) {
      window.location = decodeURIComponent(query.redirect)
    } else {
      window.location.reload()
    }
  }

  render () {
    const { error, username, password } = this.state
    const update = key => val => this.setState({ [key]: val })
    return (
      <App subtitle='Auth'>
        <div className='wrapper'>
          <div className='card'>
            <h1>Login</h1>
            {error && <div className='error'>{error}</div>}
            <Field
              label='Username'
              value={username}
              onChange={update('username')}
              autoFocus
            />
            <Field
              label='Password'
              value={password}
              onChange={update('password')}
              onKeyDown={this.maybeHandleLogin}
              type='password'
            />
            <button onClick={this.handleLogin}>Login</button>
          </div>
          <style jsx>{`
            .wrapper {
              align-items: center;
              background-color: lightgrey;
              display: flex;
              justify-content: center;
              min-height: calc(100vh - 119px);
              text-align: center;
            }

            .card {
              background: white;
              display: inline-block;
              min-width: 500px;
              padding: 3em;
            }

            .error {
              color: red;
            }

            button {
              font-size: 20px;
              height: 40px;
              width: 100%;
            }
          `}</style>
        </div>
      </App>
    )
  }
}

export default withData(graphql(LoginMutation)(Auth), maybeRedirect)
