import React from 'react';
import { IRegisterState } from '../../reducers';
import { Users } from '../../models/Users';

interface IRegisterProps {
  register: IRegisterState,
  updatePassword: (password: string) => void,
  updateUsername: (username: string) => void,
  updateDisplayName: (displayName: string) => void,
  updateFirstName: (firstName: string) => void,
  updateLastName: (lastName: string) => void,
  updateEmail: (email: string) => void,
  updatePhone: (phone: string) => void,
  registerRequest: (newUser: Users) => void,
  clearMessage: () => void

}

export class RegisterComponent extends React.Component<IRegisterProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearMessage();
  }

  updateUsername = (event) => {
    this.props.updateUsername(event.target.value)
  }

  updatePassword = (event) => {
    this.props.updatePassword(event.target.value)
  }

  updateDisplayName = (event) => {
    this.props.updateDisplayName(event.target.value)
  }

  updateFirstName = (event) => {
    this.props.updateFirstName(event.target.value)
  }

  updateLastName = (event) => {
    this.props.updateLastName(event.target.value)
  }

  updateEmail = (event) => {
    this.props.updateEmail(event.target.value)
  }

  updatePhone = (event) => {
    this.props.updatePhone(event.target.value)
  }

  register = (event) => {
    event.preventDefault();
    this.props.registerRequest(this.props.register.newUser);
  }


  render() {
    const { username, password, displayName, firstName, lastName, email, phone } = this.props.register.newUser
    return (
      <div className='terminal'>
        <form className="form-signin" onSubmit={this.register}>
          <div className="registerSection">
            <h2 className="h3 mb-3 font-weight-normal">Please Register your Information</h2>
          </div>
          <div className="pictureRegister">
          </div>
          <div className="dividerLine"></div>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <br />
          <input type="text"
            id="inputUsername"
            className="text-form"
            placeholder="Username"
            value={username}
            onChange={this.updateUsername}
            required />
          <br />
          <br />
          <label htmlFor="inputDisplayName" className="sr-only">Display Name</label>
          <br />
          <input type="text"
            id="inputDisplayName"
            className="text-form"
            placeholder="Display Name"
            value={displayName}
            onChange={this.updateDisplayName}
            required />
          <br />
          <br />
          <label htmlFor="inputFirstName" className="sr-only">First Name</label>
          <br />
          <input type="text"
            id="inputFirstName"
            className="text-form"
            placeholder="First Name"
            value={firstName}
            onChange={this.updateFirstName}
            required />
          <br />
          <br />
          <label htmlFor="inputLastName" className="sr-only">Last Name</label>
          <br />
          <input type="text"
            id="inputLastName"
            className="text-form"
            placeholder="Last Name"
            value={lastName}
            onChange={this.updateLastName}
            required />
          <br />
          <br />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <br />
          <input type="password"
            id="inputPassword"
            className="text-form"
            placeholder="Password"
            value={password}
            onChange={this.updatePassword}
            required />
          <br />
          <br />
          <label htmlFor="inputEmail" className="sr-only">Email</label>
          <br />
          <input type="email"
            name="emailaddress"
            id="inputEmail"
            className="text-form"
            placeholder="Email"
            value={email}
            onChange={this.updateEmail}
            required />
          <br />
          <br />
          <label htmlFor="inputPhone" className="sr-only">Phone Number</label>
          <br />
          <input type="tel"
            id="inputPhone"
            className="text-form"
            placeholder="Phone #"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={phone}
            onChange={this.updatePhone}
            required />
          <p id="error-message">{this.props.register.registerFeedback}</p>
          <hr />
          <button className="registerButton" type="submit">Register</button>
        </form>
      </div>
    )
  }

}

