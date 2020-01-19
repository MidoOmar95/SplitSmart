import React, { Fragment } from 'react';
import { ILoginState } from '../../reducers';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';




//this interface is just saying what we are going to get as props from our container component
//we coulddo this with props any but by specifying it makes it easier with out intellisense
interface ILoginProps extends RouteComponentProps<{}>{
  login: ILoginState,
  loggedIn: false,
  updatePassword: (password: string) => void,
  updateUsername: (username: string) => void,
  loginRequest: (username: string, password: string, history: any) => void,
  clearMessage: () => void,
  



}


//our actual component, however when we want to instatiate it, we will use the export in the container
export class LoginComponent extends React.Component<ILoginProps, any> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
   
  }

  //when we load the component, clear the old message
  componentDidMount() {
    this.props.clearMessage();
  }

  // whenever the change the username input, call the updateUsername action with the value
  updateUsername = (event) => {
    this.props.updateUsername(event.target.value)
  }
  // whenever the change the password input, call the updatePassword action with the value
  updatePassword = (event) => {
    this.props.updatePassword(event.target.value)
  }

  //when they hit submit, send the username value and password value into our login action
  login = (event) => {
    event.preventDefault(); // prevent default form submission
    this.props.loginRequest(this.props.login.username, this.props.login.password, this.props.history);
  }

  render() {
     
    //get our password and username from the passed in state
    const { username, password } = this.props.login
    return (


      //onsubmit{this.login}
      // <div className='terminal
      <div className="body">
        <div className="login-box">
          <form className="login-form" onSubmit={this.login}>
            <h1>Login</h1>
            <div className="textbox">
              <FaUser className="fa" />
              <input
                type="text"
                className="txtb"
                placeholder="Username"
                value={username}
                onChange={this.updateUsername}
                required />
            </div>
            <div className="textbox">
              <FaLock className="fa" />
              <input
                type="password"
                className="txtb"
                placeholder="Password"
                value={password}
                onChange={this.updatePassword}
                required />
            </div>
            <p id="error-message">{this.props.login.feedbackMessage}</p>
            <button className="login-btn" type="submit" >Sign in</button>
          </form>
             
          <Link className="link-to-newAccount" to='/register'> Register A New Account</Link>
        </div>
      </div>

      /* <form className="form-signin" onSubmit={this.login}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text"
          id="inputUsername"
          className="text-form"
          placeholder="Username"
          value={username}
          onChange={this.updateUsername}
          required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password"
          id="inputPassword"
          className="text-form"
          placeholder="Password"
          value={password}
          onChange={this.updatePassword}
          required />
        <p id="error-message">{this.props.login.feedbackMessage}</p>
        <button className="button-form" type="submit">Sign in</button>
      </form>
      <Link to='/register'> Register A New Account</Link>
    </div>
     */


    )

  }

}