import { IGroupSettingsState } from ".";
import { Users } from "../models/Users";
import { Groups } from "../models/Groups";
import { Url } from 'url';
import { GroupSettingsTypes } from "../actions/GroupSettings/GroupSettings.actions";
import { registerTypes } from "../actions/register/Register.actions";
import { logoutTypes } from "../actions/logout/Logout.actions";
const initialState: IGroupSettingsState = {
  usernameToAdd: '',
  updatedGroup: new Groups,
}

export const GroupSettingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GroupSettingsTypes.INITIALIZE_GROUP_SETTINGS:
      return {
        ...state,
        updatedGroup: {
          ...action.payload.updatedGroup,
        }
      }

    case GroupSettingsTypes.UPDATE_GROUP:
      return {
        ...state,
        updatedGroup: new Groups
      }

    case GroupSettingsTypes.UPDATE_GROUP_NAME:
      return {
        ...state,
        updatedGroup: {
          ...state.updatedGroup,
          groupName: action.payload.groupName
        }
      }

    case GroupSettingsTypes.UPDATE_GROUP_DESCRIPTION:
      return {
        ...state,
        updatedGroup: {
          ...state.updatedGroup,
          groupDescription: action.payload.groupDescription
        }
      }

    case GroupSettingsTypes.UPDATE_GROUP_PICTURE:
      return {
        ...state,
        updatedGroup: {
          ...state.updatedGroup,
          groupPicture: action.payload.groupPicture
        }
      }


    case GroupSettingsTypes.FAILED_TO_UPDATE_GROUP:
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      }

     case GroupSettingsTypes.FAILED_TO_ADD_USER_TO_GROUP:
     console.log(action.payload.user);
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      } 
      case GroupSettingsTypes.UPDATE_USER_TO_ADD:
      return{
        ...state,
        usernameToAdd: action.payload.usernameToAdd
      }
      case GroupSettingsTypes.INVITE_USER_TO_GROUP:
        console.log(action.payload.user)
        let newArray = [...state.updatedGroup.groupMembers];
        newArray.push(action.payload.user)
        action.payload.usernameToAdd = '';
        return{
          ...state,
          updatedGroup: {
            ...state.updatedGroup,
            groupMembers: newArray
          }
          

      }
      case GroupSettingsTypes.RESET_ADD_FORM:
        return{
          ...state,
          usernameToAdd: ''
        }
      case logoutTypes.LOGOUT:
            return {
              usernameToAdd: '',
              updatedGroup: new Groups,
            }

  }
  return state
}
