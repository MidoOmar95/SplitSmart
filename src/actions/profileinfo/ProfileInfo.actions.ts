import { ssClient } from '../../axios/ss.client';
import { Users } from '../../models/Users';
import { Url } from "url";

export const profileInfoTypes = {
    GET_USER_BY_USERNAME: 'UP_GET_USER_BY_USERNAME',
    BAD_USER_REQUEST: 'BAD_USER_REQUEST'
}


export const getUserProfile = (username: string) => async (dispatch) => {
    try {
        const res = await ssClient.get(`/users/username/${username}`);// we might change this path
        dispatch({
            payload: {
                profileUser: res.data
            },
            type: profileInfoTypes.GET_USER_BY_USERNAME
        })
    } catch (err) {
        console.log(err);
        dispatch({
            payload: {
    
            },
            type: profileInfoTypes.BAD_USER_REQUEST
    
        })
    } 
}
