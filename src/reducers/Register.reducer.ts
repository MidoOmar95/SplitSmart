import { IRegisterState } from ".";
import { Users } from "../models/Users";
import { registerTypes } from "../actions/register/Register.actions";
import { logoutTypes } from "../actions/logout/Logout.actions";


const initialState: IRegisterState = {
    newUser: new Users,
    registerFeedback: '',
  }
  
  export const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
      
      case registerTypes.UPDATE_PASSWORD:
        return {
          ...state,
          newUser:{
              ...state.newUser,
              password: action.payload.password
            }
        }
        
      case registerTypes.UPDATE_USERNAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          username: action.payload.username
          }
      }
      case registerTypes.UPDATE_DISPLAY_NAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          displayName: action.payload.displayName
          }
      }
      case registerTypes.UPDATE_FIRST_NAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          firstName: action.payload.firstName
          }
      }
      case registerTypes.UPDATE_LAST_NAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          lastName: action.payload.lastName
          }
      }
      case registerTypes.UPDATE_EMAIL:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          email: action.payload.email
          }
      }
      case registerTypes.UPDATE_PHONE:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          phone: action.payload.phone
          }
      }
      
      case registerTypes.CLEAR_REGISTER_MESSAGE:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          registerFeedback: ''
          }
      }
      
      case registerTypes.REGISTER:{
          return {
              ...state,
              newUser: new Users,  
          }
      } 
  
      case registerTypes.FAILED_REGISTER: {
          return {
              ...state,
              registerFeedback: 'Incorrect Data'
          }
  
      }
      case logoutTypes.LOGOUT:
            return {
              newUser: new Users,
              registerFeedback: '',
            }
    }
    return state;
  }