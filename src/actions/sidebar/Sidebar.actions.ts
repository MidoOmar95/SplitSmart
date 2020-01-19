

export const sideBarTypes = {
   BACKDROP_CLICK_HANDLER: 'SB_BACKDROP__CLICK_HANDLER',
   DRAWER_TOGGLE_CLICK_HANDLER: 'DRAWER_TOGGLE_CLICK_HANDLER'
}

export const backdropClick = () => {
    return {
        payload: {
        },
        type: sideBarTypes.BACKDROP_CLICK_HANDLER
    }
}

export const drawerToggle = () => {
    return {
        payload: {
        },
        type: sideBarTypes.DRAWER_TOGGLE_CLICK_HANDLER
    }
}