import { Groups } from "../../models/Groups";
import { Url } from "url";
import { ssClient } from "../../axios/ss.client";

export const GroupSettingsTypes = {
    UPDATE_GROUP: 'GS_UPDATE_GROUP',
    UPDATE_GROUP_NAME: 'GS_UPDATE_GROUP_NAME',
    UPDATE_GROUP_PICTURE: 'GS_UPDATE_GROUP_PICTURE',
    UPDATE_GROUP_DESCRIPTION: 'GS_UPDATE_GROUP_DESCRIPTION',
    INVITE_USER_TO_GROUP: 'GS_INVITE_USER_TO_GROUP',
    FAILED_TO_UPDATE_GROUP: 'GS_FAILED_TO_ADD_GROUP',
    FAILED_TO_ADD_USER_TO_GROUP: 'GS_FAILED_TO_ADD_USER_TO_GROUP',
    RESET_ADD_FORM: 'GS_RESET_ADD_FORM',
    UPDATE_USER_TO_ADD: 'GS_UPDATE_USER_TO_ADD',
    INITIALIZE_GROUP_SETTINGS: 'INITIALIZE_GROUP_SETTINGS'
}

export const updateGroup = (currentGroup: Groups) => async (dispatch) => {

    
    try{
        const res = await ssClient.post('/groupSettings', currentGroup);
        console.log(res)
        //when doing an async action, we have to call the dispatcher ourselves
        //this is the same thing as returning the payload up above in our other methods
        dispatch({
            payload: {
                group: res.data
            },
            type: GroupSettingsTypes.UPDATE_GROUP
        })

    }catch (err) {
        //impediment, how to get api message from error
        console.log(err);
        dispatch({
            payload: {
            },
            type: GroupSettingsTypes.FAILED_TO_UPDATE_GROUP
        })


}
}


export const updateGroupName = (groupName: string) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupSettingsTypes.UPDATE_GROUP_NAME
    }

}
export const updateGroupPicture = (groupPicture: string) => {
    return {
        payload: {
            groupPicture: groupPicture
        },
        type: GroupSettingsTypes.UPDATE_GROUP_PICTURE
    }

}

export const updateGroupDescription = (groupDescription: string) => {
    return {
        payload: {
            groupDescription: groupDescription
        },
        type: GroupSettingsTypes.UPDATE_GROUP_DESCRIPTION
    }

}

export const updateUserToAdd = (usernameToAdd: string) => {
    return {
        payload: {
            usernameToAdd: usernameToAdd
        },
        type: GroupSettingsTypes.UPDATE_USER_TO_ADD
    }
}

export const resetAddForm = (usernameToAdd: string) => {
    return {
        payload: {
            usernameToAdd: usernameToAdd
        },
        type: GroupSettingsTypes.RESET_ADD_FORM
    }
}



export const initializeGroupSettings = (currentGroup: Groups) => {
    return {
        payload: {
            updatedGroup: currentGroup
        },
        type: GroupSettingsTypes.INITIALIZE_GROUP_SETTINGS
    }
}


export const inviteUserToGroup = (username: string) => async (dispatch) => {

    try{
        console.log(username)
        const res = await ssClient.get(`/users/username/${username}`);
        console.log(res)
        //when doing an async action, we have to call the dispatcher ourselves
        //this is the same thing as returning the payload up above in our other methods
        dispatch({
            payload: {
                user: res.data
            },
            type: GroupSettingsTypes.INVITE_USER_TO_GROUP
        })

    }catch (err) {
        //impediment, how to get api message from error
        console.log(err);
        dispatch({
            payload: {
            },
            type: GroupSettingsTypes.FAILED_TO_ADD_USER_TO_GROUP
        })

}
}