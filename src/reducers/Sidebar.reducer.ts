import { IProfileInfoState, ISideBarState } from '.';
import { sideBarTypes } from '../actions/sidebar/Sidebar.actions';
import { Users } from '../models/Users';
import { logoutTypes } from '../actions/logout/Logout.actions';

const initialState: ISideBarState = {
    sideDrawerOpen: false
}

export const sideBarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case sideBarTypes.BACKDROP_CLICK_HANDLER:
            return {
                ...state,
                sideDrawerOpen: false
            };
        case sideBarTypes.DRAWER_TOGGLE_CLICK_HANDLER:
            return {
                ...state,
                sideDrawerOpen: !state.sideDrawerOpen
            };
        case logoutTypes.LOGOUT:
            return {
                sideDrawerOpen: false
            }
    }
    return state;
}//state returned here 