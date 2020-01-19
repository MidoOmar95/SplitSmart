export const logoutTypes = {
    LOGOUT: "LOGOUT_KILL_DEATH"   
}


export const logout = () => {
    return {
        payload: {
        },
        type: logoutTypes.LOGOUT
    }

}