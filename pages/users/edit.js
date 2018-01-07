import { gql, graphql } from 'react-apollo'

import App from '../../components/app'
import LoadingSpinner from '../../components/loading-spinner'
import UsersEdit from '../../components/users-edit'
import withData from '../../lib/with-data'

function maybeRedirect (curUser) {
  if (!curUser) return '/auth'
}

const UserQuery = gql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      id
      firstname
      lastname
      email
      username
      role
    }
  }
`

function UsersEditPage ({ data }) {
  if (data.loading) return <LoadingSpinner />
  return (
    <App subtitle='Edit User'>
      <UsersEdit user={data.user} />
    </App>
  )
}

export default withData(
  graphql(UserQuery, {
    options: props => ({ variables: { id: props.url.query.id } })
  })(UsersEditPage),
  maybeRedirect
)
