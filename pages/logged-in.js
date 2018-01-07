import { gql, graphql } from 'react-apollo'

import App from '../components/app'
import LoadingSpinner from '../components/loading-spinner'
import withData from '../lib/with-data'

function maybeRedirect (curUser) {
  if (!curUser) return '/auth'
}

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

const LogoutMutation = gql`
  mutation LogoutMutation {
    logout
  }
`

function LoggedInPage ({ data, mutate }) {
  if (data.loading) return <LoadingSpinner />
  const logout = async () => {
    await mutate()
    window.location.reload()
  }
  return (
    <App subtitle='Auth'>
      <div className='wrapper'>
        <div className='card'>
          <div>Welcome {data.currentUser.username}!</div>
          <div className='msg'>You are logged in.</div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          align-items: flex-start;
          background-color: lightgrey;
          display: flex;
          min-height: calc(100vh - 119px);
          justify-content: center;
          text-align: center;
        }

        .card {
          background: white;
          display: inline-block;
          margin-top: 70px;
          min-width: 500px;
          padding: 3em;
        }

        .msg {
          padding: 10px 0;
        }

        button {
          padding: 4px 26px;
        }
      `}</style>
    </App>
  )
}

export default withData(
  graphql(CurrentUserQuery)(graphql(LogoutMutation)(LoggedInPage)),
  maybeRedirect
)
