import { ssClient } from '../../axios/ss.client';
import { Users } from '../../models/Users';
import { Url } from "url";
import { profileInfoTypes } from '../profileinfo/ProfileInfo.actions';

export const accountSettingsTypes = {
    UPDATE_USERNAME: 'AS_UPDATE_USERNAME',
    UPDATE_DISPLAYNAME: 'AS_UPDATE_DISPLAYNAME',
    UPDATE_PASSWORD: 'AS_UPDATE_PASSWORD',
    UPDATE_FIRST_NAME: 'AS_UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'AS_UPDATE_LAST_NAME',
    UPDATE_EMAIL: 'AS_UPDATE_EMAIL',
    UPDATE_PROFILE_PICTURE: 'AS_UPDATE_PROFILE_PICTURE',
    UPDATE_PHONE_NUMBER: 'AS_UPDATE_PHONE_NUMBER',
    UPDATE_USER: 'UPDATE_USER',
    DEACTIVATE_ACCOUNT: 'AS_DEACTIVATE_ACCOUNT',
    CLEAR_UPDATE_MESSAGE: 'CLEAR_UPDATE_MESSAGE',
    BAD_USER_REQUEST: 'BAD_USER_REQUEST',
    UPDATE_USER_ID: 'UPDATE_USER_ID'

}
//Actions
export const clearMessage = () => {
    return {
        payload: {

        },
        type: accountSettingsTypes.CLEAR_UPDATE_MESSAGE
    }
}
export const updateUsername = (username: string) => {
    return {
        payload: {
            username: username
        },
        type: accountSettingsTypes.UPDATE_USERNAME
    }
}
export const updateDisplayName = (displayName: string) => {
    return {
        payload: {
            displayName: displayName
        },
        type: accountSettingsTypes.UPDATE_DISPLAYNAME
    }
}
export const updatePassword = (password: string) => {
    return {
        payload: {
            password: password
        },
        type: accountSettingsTypes.UPDATE_PASSWORD
    }
}
export const updateFirstName = (firstName: string) => {
    return {
        payload: {
            firstName: firstName
        },
        type: accountSettingsTypes.UPDATE_FIRST_NAME
    }
}
export const updateLastName = (lastName: string) => {
    return {
        payload: {
            lastName: lastName
        },
        type: accountSettingsTypes.UPDATE_LAST_NAME
    }
}
export const updateEmail = (email: string) => {
    return {
        payload: {
            email: email
        },
        type: accountSettingsTypes.UPDATE_EMAIL
    }
}
export const updateProfilePicture = (picture: string) => {
    return {
        payload: {
            picture: picture
        },
        type: accountSettingsTypes.UPDATE_PROFILE_PICTURE
    }
}
export const updatePhoneNumber = (phone: string) => {
    return {
        payload: {
            phone: phone
        },
        type: accountSettingsTypes.UPDATE_PHONE_NUMBER
    }
}
export const updateUserId = (userId: number) => {
    return {
        payload: {
            userId: userId
        },
        type: accountSettingsTypes.UPDATE_USER_ID
    }
}
export const deactivateAccount = () => {
    return {
        payload: {

        },
        type: accountSettingsTypes.DEACTIVATE_ACCOUNT
    }
}

export const updateUser = (updatedUser: Users) => async (dispatch) => {
    try {
        const res = await ssClient.patch('/users', updatedUser);
        dispatch({
            payload: {
                user: res.data
            },
            type: accountSettingsTypes.UPDATE_USER
        })
        dispatch({
            payload: {
                profileUser: updatedUser
            },
            type: profileInfoTypes.GET_USER_BY_USERNAME
        })
    } catch (err) {
        console.log(err);
        dispatch({
            payload: {
    
            },
            type: accountSettingsTypes.BAD_USER_REQUEST
    
        })
    } 
}
