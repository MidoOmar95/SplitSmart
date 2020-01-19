import { IAddGroupState } from ".";
import { Users } from "../models/Users";
import { Groups } from "../models/Groups";
import { Url } from 'url';
import { addGroupTypes } from "../actions/addGroup/AddGroup.actions";
import { registerTypes } from "../actions/register/Register.actions";
import { logoutTypes } from "../actions/logout/Logout.actions";
const initialState: IAddGroupState = {
  newGroup: new Groups,
  usernameToAdd: ''
}

export const addGroupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addGroupTypes.CREATE_GROUP:
      return {
        ...state,
        newGroup: new Groups
      }

    case addGroupTypes.UPDATE_GROUP_NAME:
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupName: action.payload.groupName
        }
      }

    case addGroupTypes.UPDATE_GROUP_DESCRIPTION:
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupDescription: action.payload.groupDescription
        }
      }

    case addGroupTypes.UPDATE_GROUP_PICTURE:
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupPicture: action.payload.groupPicture
        }
      }

    case addGroupTypes.UPDATE_GROUP_OWNER:
    let newArray = [...state.newGroup.groupMembers];
        newArray.push(action.payload.user);
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupOwner: action.payload.user,
          groupMembers: newArray

        }
      }

    case addGroupTypes.FAILED_TO_ADD_GROUP:
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      }

    case addGroupTypes.FAILED_TO_ADD_USER_TO_GROUP:
      console.log(action.payload.user);
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      }
    case addGroupTypes.UPDATE_USER_TO_ADD:
      return {
        ...state,
        usernameToAdd: action.payload.usernameToAdd
      }
    case addGroupTypes.INVITE_USER_TO_GROUP:
      console.log(action.payload.user)
      console.log(state.newGroup.groupMembers)
      console.log(state.newGroup.groupMembers.includes(action.payload.user) )
      let check = true;
      for(let i = 0; i <state.newGroup.groupMembers.length; i++){
        if(state.newGroup.groupMembers[i].userId === action.payload.user.userId){
          check = false;
        }
      }
      if(check)
      {
        let newArray = [...state.newGroup.groupMembers];
        newArray.push(action.payload.user);
        return {
          ...state,
          usernameToAdd: '',
          newGroup: {
            ...state.newGroup,
            groupMembers: newArray
          }
        }


      }
      else {
        return {
          ...state,
          usernameToAdd: '',
        }
      }
    case addGroupTypes.RESET_ADD_FORM:
      initialState.usernameToAdd = '';
      return {
        ...state,
      };
    case logoutTypes.LOGOUT:
            return {
              newGroup: new Groups,
              usernameToAdd: ''
            }

  }
  return state
}
