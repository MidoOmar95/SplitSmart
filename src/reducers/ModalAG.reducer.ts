import { IModalAGState } from '.';
import { modalAGTypes } from '../actions/modal/ModalAG.actions';
import { Users } from '../models/Users';
import { logoutTypes } from '../actions/logout/Logout.actions';

const initialState: IModalAGState = {
    showAGModal: ''
}

export const modalAGReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case modalAGTypes.OPEN_AGMODAL:
            return {
                ...state,
                showAGModal: action.payload.type
            };
        case modalAGTypes.CLOSE_AGMODAL:
            return {
                ...state,
                showAGModal: ''
            };
        case logoutTypes.LOGOUT:
            return {
                showAGModal: ''
            }
    }
    return state;
}//state returned here 