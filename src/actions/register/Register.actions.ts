
import { ssClient } from "../../axios/ss.client";

export const registerTypes = {
    UPDATE_USERNAME: 'REGISTER_UPDATE_USERNAME',
    UPDATE_PASSWORD: 'REGISTER_UPDATE_PASSWORD',
    UPDATE_DISPLAY_NAME: 'REGISTER_UPDATE_DISPLAY_NAME',
    UPDATE_FIRST_NAME: 'REGISTER_UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'REGISTER_UPDATE_LAST_NAME',
    UPDATE_EMAIL: 'REGISTER_UPDATE_EMAIL',
    UPDATE_PHONE: 'REGISTER_UPDATE_PHONE',
    REGISTER: 'REGISTER',
    FAILED_REGISTER: 'FAILED_REGISTER',
    CLEAR_REGISTER_MESSAGE: 'CLEAR_REGISTER_MESSAGE'
  }
  
  export const clearMessage = () => {
    return {
        payload:{
        },
        type: registerTypes.CLEAR_REGISTER_MESSAGE
    }

}

export const updatePassword = (password:string) => {
    return {
        payload:{
            password
        },
        type: registerTypes.UPDATE_PASSWORD
    }

}

export const updateUsername = (username:string) => {
    return {
        payload:{
            username
        },
        type: registerTypes.UPDATE_USERNAME
    }

}

export const updateDisplayName = (displayName:string) => {
    return {
        payload:{
            displayName
        },
        type: registerTypes.UPDATE_DISPLAY_NAME
    }

}

export const updateFirstName = (firstName:string) => {
    return {
        payload:{
            firstName
        },
        type: registerTypes.UPDATE_FIRST_NAME
    }

}

export const updateLastName = (lastName:string) => {
    return {
        payload:{
            lastName
        },
        type: registerTypes.UPDATE_LAST_NAME
    }

}

export const updateEmail = (email:string) => {
    return {
        payload:{
            email
        },
        type: registerTypes.UPDATE_EMAIL
    }

}

export const updatePhone = (phone:string) => {
    return {
        payload:{
            phone
        },
        type: registerTypes.UPDATE_PHONE
    }

}

export const registerRequest = (newUser) => async (dispatch ) => {
    
    try {
      const res = await ssClient.post('/users', newUser);
      console.log(res)
      dispatch({
          payload:{
            user: res.data
          },
          type: registerTypes.REGISTER
      })
      
    } catch (err) {
      console.log(err);
      dispatch({
        payload:{
        // needs to send correct error message
        },
        type: registerTypes.FAILED_REGISTER
    })
      
      
    }
  
  }