import App from '../../components/app'
import UsersEdit from '../../components/users-edit'
import withData from '../../lib/with-data'

function maybeRedirect (curUser) {
  if (!curUser) return '/auth'
}

function UsersNew () {
  return (
    <App subtitle='New User'>
      <UsersEdit user={{ role: 'user' }} isNew />
    </App>
  )
}

export default withData(UsersNew, maybeRedirect)
