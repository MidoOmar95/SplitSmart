import { ILoginState } from ".";
import { Users } from "../models/Users";
import { loginTypes } from "../actions/login/Login.actions";
import { logoutTypes } from "../actions/logout/Logout.actions";

//this is our intialstate of the interface we declared for the login component
const initialState: ILoginState = {
  user: new Users,
  username: '',
  password: '',
  feedbackMessage: '',
}

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //if the action is of type update password, take action payload and update our password
    //we need ...state, cause we want the rest of the state to stay the same
    case loginTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      }
    //same as up above
    case loginTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload.username
      }
    //this is one where we don't need a payload cause we dont need any outside information to reset a field
    //just the action to reset is good enough
    case loginTypes.CLEAR_LOGIN_MESSAGE:
      return {
        ...state,
        feedbackMessage: ''
      }
    //reset our credentials and update the user field with our recieved user inforamtion
    case loginTypes.LOGIN: {
      const password = '';
      const username = '';
      return {
        ...state,
        user: action.payload.user,
        feedbackMessage: 'YOU DID IT!',
        username: username,
        password: password

      }
    }

    //reset the credentials and tell them to try again
    case loginTypes.FAILED_LOGIN: {
      const password = '';
      const username = '';
      return {
        ...state,
        username: username,
        password: password,
        feedbackMessage: 'Incorrect Username or Password'
      }

    }
    case logoutTypes.LOGOUT:
            return {
              user: new Users,
              username: '',
              password: '',
              feedbackMessage: '',
            }

  }
  return state;
}