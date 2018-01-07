import { map } from 'lodash'
import Link from 'next/link'
import { gql, graphql } from 'react-apollo'

import App from '../../components/app'
import LoadingSpinner from '../../components/loading-spinner'
import withData from '../../lib/with-data'

function maybeRedirect (curUser) {
  if (!curUser) return '/auth'
}

const UsersQuery = gql`
  query UsersQuery {
    users {
      id
      firstname
      lastname
      email
      username
      role
    }
  }
`

function UsersList ({ data }) {
  if (data.loading) return <LoadingSpinner />
  const users = data.users || []
  return (
    <App subtitle='Users'>
      <div className='wrapper'>
        <div className='header'>
          <h1>Users</h1>
          <Link prefetch href='/users/new'>
            <a>Create</a>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {map(users, user => (
              <tr key={user.id}>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <Link
                    prefetch
                    href={`/users/edit?id=${user.id}`}
                    as={`/users/${user.id}/edit`}
                  >
                    <a>Edit</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{`
          .wrapper {
            min-height: calc(100vh - 119px);
          }

          .header {
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
          }

          table {
            width: 100%;
          }

          tr {
            height: 50px;
          }

          tr:nth-child(even) {
            background: #f1f1f1;
          }

          th {
            text-align: left;
            padding-left: 15px;
            background: lightgray;
          }

          td {
            padding: 10px;
          }
        `}</style>
      </div>
    </App>
  )
}

export default withData(graphql(UsersQuery)(UsersList), maybeRedirect)
