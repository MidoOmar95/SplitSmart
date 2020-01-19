
import { ssClient } from "../../axios/ss.client";


export const loginTypes = {
    UPDATE_USERNAME: 'L_UPDATE_USERNAME',
    UPDATE_PASSWORD: 'L_UPDATE_PASSWORD',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    FAILED_LOGIN: 'FAILED_LOGIN',
    CLEAR_LOGIN_MESSAGE: 'CLEAR_LOGIN_MESSAGE',
      
    
}


//for the action to clear a message we dont really need to send any data,
//the reducer can just set the message to empty string when it gets this type
export const clearMessage = () => {
    return {
        payload: {
        },
        type: loginTypes.CLEAR_LOGIN_MESSAGE
    }

}

//takes in a password value and sends it to the reducer to be written to state
export const updatePassword = (password: string) => {
    return {
        payload: {
            password
        },
        type: loginTypes.UPDATE_PASSWORD
    }

}

//takes in a username value and sends it to the reducer to be written to state
export const updateUsername = (username: string) => {
    return {
        payload: {
            username
        },
        type: loginTypes.UPDATE_USERNAME
    }

}


export const logout = () =>{
    return {
        payload:{

        },
        type: loginTypes.LOGOUT
    }
}


//takes in a username and password and attempts to login to the api with them
//this method is asyncronous so we have to use the dispatch method
//you notice that our declaration is a little weird, but this is the way we have to do it
export const loginRequest = (username, password, history) => async (dispatch) => {

    const credentials = {
        username: username,
        password: password
    }
    try {
        const res = await ssClient.post('/users/login', credentials);
        console.log(res)
        //when doing an async action, we have to call the dispatcher ourselves
        //this is the same thing as returning the payload up above in our other methods
        if(res.data){
        dispatch({
            payload: {
                user: res.data
            },
            type: loginTypes.LOGIN
        })
        history.push('/group');
        } else {
            dispatch({
                payload: {
                },
                type: loginTypes.FAILED_LOGIN
            })
        }

    } catch (err) {
        //impediment, how to get api message from error
        console.log(err);
        dispatch({
            payload: {
            },
            type: loginTypes.FAILED_LOGIN
        })


    }

}
