import Link from 'next/link'
import React, { Component } from 'react'
import { compose, gql, graphql } from 'react-apollo'

import Field from './field'

const CreateMutation = gql`
  mutation CreateMutation(
    $firstname: String
    $lastname: String
    $username: String!
    $email: String!
    $password: String!
    $role: String
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      id
    }
  }
`

const UpdateMutation = gql`
  mutation UpdateMutation(
    $id: ID!
    $firstname: String
    $lastname: String
    $username: String
    $email: String
    $password: String
    $role: String
  ) {
    updateUser(
      id: $id
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      id
    }
  }
`

const DeleteMutation = gql`
  mutation DeleteMutation($id: ID!) {
    deleteUser(id: $id)
  }
`

class UsersEdit extends Component {
  componentWillMount () {
    this.initializeState(this.props.user)
  }

  componentWillReceiveProps (nextProps) {
    this.initializeState(nextProps.user)
  }

  initializeState (user) {
    this.setState({
      error: '',
      user: {
        ...user,
        password: '',
        confirmpassword: ''
      }
    })
  }

  async deleteUser (id) {
    const res = confirm('Are you sure?')
    if (!res) return
    await this.props.mutateDelete({ variables: { id } })
    window.location = '/users'
  }

  saveUser = async () => {
    const { user } = this.state
    const { isNew } = this.props
    if (
      (user.password || user.confirmpassword) &&
      user.password !== user.confirmpassword
    ) {
      return this.setState({ error: "Passwords don't match" })
    }
    if (isNew) {
      let error = ''
      if (!user.password) error = 'Password is required'
      if (!user.username) error = 'Username is required'
      if (!user.email) error = 'Email is required'
      if (error) return this.setState({ error })
    }
    this.setState({ error: '' })
    if (isNew) {
      await this.props.mutateCreate({ variables: user })
    } else {
      await this.props.mutateUpdate({ variables: user })
    }
    window.location = '/users'
  }

  render () {
    const { error, user } = this.state
    const { isNew, user: { id, username } } = this.props
    const update = key => v => this.setState({ user: { ...user, [key]: v } })
    return (
      <div className='wrapper'>
        <h1>{isNew ? 'New User' : username}</h1>
        {error && <div className='error'>{error}</div>}
        {!isNew && <div>{`ID: ${id}`}</div>}
        <Field
          label='First Name'
          onChange={update('firstname')}
          value={user.firstname}
          autoFocus
        />
        <Field
          label='Last Name'
          onChange={update('lastname')}
          value={user.lastname}
        />
        <Field
          label='Username'
          onChange={update('username')}
          value={user.username}
        />
        <Field label='Email' onChange={update('email')} value={user.email} />
        <div className='passwords'>
          <Field
            label='Password'
            onChange={update('password')}
            value={user.password}
            type='password'
          />
          <Field
            label='Confirm Password'
            onChange={update('confirmpassword')}
            value={user.confirmpassword}
            type='password'
          />
        </div>
        <label>Role</label>
        <select
          onChange={e => update('role')(e.target.value)}
          value={user.role}
        >
          <option value='user' label='User' />
          <option value='admin' label='Admin' />
        </select>
        <div className='actions'>
          <Link prefetch href='/users'>
            <a>Back To List</a>
          </Link>
          {!isNew && (
            <button onClick={() => this.deleteUser(id)}>Delete User</button>
          )}
          <button onClick={this.saveUser}>Save User</button>
        </div>
        <style jsx>{`
          .wrapper {
            margin: 0 2em;
            min-height: calc(100vh - 119px);
          }

          .error {
            color: red;
          }

          .passwords {
            display: flex;
          }

          .passwords > :global(*) {
            flex: 1;
          }

          .actions {
            display: flex;
            justify-content: space-between;
            padding-top: 30px;
          }

          .actions > :global(*) {
            align-items: center;
            background: #7362a9;
            border-radius: 10px;
            border: none;
            color: white;
            cursor: pointer;
            display: flex;
            font-size: 12px;
            height: 40px;
            justify-content: center;
            width: 100px;
          }

          .actions > :global(*):hover {
            background: #9888ce;
          }
          .actions > :global(*):active {
            background: #483d6b;
          }
        `}</style>
      </div>
    )
  }
}

export default compose(
  graphql(CreateMutation, { name: 'mutateCreate' }),
  graphql(UpdateMutation, { name: 'mutateUpdate' }),
  graphql(DeleteMutation, { name: 'mutateDelete' })
)(UsersEdit)
