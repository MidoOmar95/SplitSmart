import { IAccountSettingsState } from '.';

import { accountSettingsTypes } from '../actions/accountsettings/AccountSettings.actions'
import { Users } from '../models/Users';
import { logoutTypes } from '../actions/logout/Logout.actions';

const initialState: IAccountSettingsState = {
    updatedUser: new Users
}

export const accountSettingsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case accountSettingsTypes.UPDATE_USERNAME:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    username: action.payload.username
                }
            }
        case accountSettingsTypes.UPDATE_DISPLAYNAME:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    displayName: action.payload.displayName
                }
            }
        case accountSettingsTypes.UPDATE_PASSWORD:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    password: action.payload.password
                }
            }
        case accountSettingsTypes.UPDATE_FIRST_NAME:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    firstName: action.payload.firstName
                }
            }
        case accountSettingsTypes.UPDATE_LAST_NAME:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    lastName: action.payload.lastName
                }
            }
        case accountSettingsTypes.UPDATE_EMAIL:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    email: action.payload.email
                }
            }
        case accountSettingsTypes.UPDATE_PHONE_NUMBER:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    phone: action.payload.phone
                }
            }
        case accountSettingsTypes.UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    picture: action.payload.picture
                }
            }
        case accountSettingsTypes.UPDATE_USER_ID:
            return {
                ...state,
                updatedUser:{
                    ...state.updatedUser,
                    userId: action.payload.userId
                }
            }
        case accountSettingsTypes.DEACTIVATE_ACCOUNT:
            return {
                ...state
            }
        case logoutTypes.LOGOUT:
            return {
                updatedUser: new Users
            }

    }
    return state;
}//state returned here 


