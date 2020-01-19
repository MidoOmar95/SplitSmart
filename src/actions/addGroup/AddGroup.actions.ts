import { Groups } from "../../models/Groups";
import { Url } from "url";
import { ssClient } from "../../axios/ss.client";
import { Users } from "../../models/Users";

export const addGroupTypes = {
    CREATE_GROUP: 'A_CREATE_GROUP',
    UPDATE_GROUP_NAME: 'A_UPDATE_GROUP_NAME',
    UPDATE_GROUP_PICTURE: 'A_UPDATE_GROUP_PICTURE',
    UPDATE_GROUP_DESCRIPTION: 'A_UPDATE_GROUP_DESCRIPTION',
    INVITE_USER_TO_GROUP: 'A_INVITE_USER_TO_GROUP',
    FAILED_TO_ADD_GROUP: 'A_FAILED_TO_ADD_GROUP',
    UPDATE_GROUP_OWNER: 'A_UPDATE_GROUP_OWNER',
    FAILED_TO_ADD_USER_TO_GROUP: 'A_FAILED_TO_ADD_USER_TO_GROUP',
    RESET_ADD_FORM: 'A_RESET_ADD_FORM',
    UPDATE_USER_TO_ADD: 'A_UPDATE_USER_TO_ADD'
}

export const createGroup = (newGroup: Groups) => async (dispatch) => {

    
    try{
        console.log(newGroup)
        const res = await ssClient.post('/groups', newGroup);
        console.log(res)
        //when doing an async action, we have to call the dispatcher ourselves
        //this is the same thing as returning the payload up above in our other methods
        dispatch({
            payload: {
                group: res.data
            },
            type: addGroupTypes.CREATE_GROUP
        })

    }catch (err) {
        //impediment, how to get api message from error
        console.log(newGroup)
        console.log(err);
        dispatch({
            payload: {
            },
            type: addGroupTypes.FAILED_TO_ADD_GROUP
        })


}
}


export const updateGroupName = (groupName: string) => {
    return {
        payload: {
            groupName: groupName
        },
        type: addGroupTypes.UPDATE_GROUP_NAME
    }

}
export const updateGroupPicture = (groupPicture: Url) => {
    return {
        payload: {
            groupPicture: groupPicture
        },
        type: addGroupTypes.UPDATE_GROUP_PICTURE
    }

}

export const updateGroupDescription = (groupDescription: string) => {
    return {
        payload: {
            groupDescription: groupDescription
        },
        type: addGroupTypes.UPDATE_GROUP_DESCRIPTION
    }

}
export const updateGroupOwner = (user: Users) => {
    return {
        payload: {
            user: user
        },
        type: addGroupTypes.UPDATE_GROUP_OWNER
    }
}

export const updateUserToAdd = (usernameToAdd: string) => {
    return {
        payload: {
            usernameToAdd: usernameToAdd
        },
        type: addGroupTypes.UPDATE_USER_TO_ADD
    }
}

export const resetAddForm = (usernameToAdd: string) => {
    return {
        payload: {
            usernameToAdd: usernameToAdd
        },
        type: addGroupTypes.RESET_ADD_FORM
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
            type: addGroupTypes.INVITE_USER_TO_GROUP
        })

    }catch (err) {
        //impediment, how to get api message from error
        console.log(err);
        dispatch({
            payload: {
            },
            type: addGroupTypes.FAILED_TO_ADD_USER_TO_GROUP
        })

}
}