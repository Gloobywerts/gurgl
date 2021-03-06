import React from 'react'
import {connect} from 'react-redux'

import SignUpForm from '../components/SignUpForm'

import { setError } from '../actions/errors'
import { registerUser, registerError } from '../actions/register'

class SignUpFormContainer extends React.Component {

  submit (values) {
    const {username, password, confirm, name, phone, address, email} = values
    if (password !== confirm) {
      this.props.registerError('Passwords do not match!')
      return
    }
   //  AUDIO IN HERE
    document.getElementById('signup-form').innerHTML =
"<embed src='" + '/audio/laugh.mp3' + "' hidden=true autostart=true loop=false>"
    const creds = {
      username: username.trim(),
      password: password.trim(),
      name: name ? name.trim() : null,
      phone: phone ? phone.trim() : null,
      address: address ? address.trim() : null,
      email: email ? email.trim() : null
    }
    this.props.registerUser(creds, () => this.props.history.push('/'))
  }
  render () {
    return (
      <div className='twelve columns form' id="signup-form">
        <SignUpForm onSubmit={this.submit.bind(this)} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds, callback) => {
      return dispatch(registerUser(creds, callback))
    },
    registerError: (message) => {
      dispatch(registerError())
      dispatch(setError(message, true))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpFormContainer)
