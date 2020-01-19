import { IGroupsState } from ".";
import { Groups } from "../models/Groups";
import { GroupTypes, setCurrentGroup } from "../actions/Group/Group.action";
import { Receipt } from "../models/Receipt";
import { Line } from "../models/Line";
import { logoutTypes } from "../actions/logout/Logout.actions";

const initialState: IGroupsState = {
    allGroups: [],
    currentGroup: new Groups,
    newReceipt: new Receipt,
    newLine: new Line,
}

export const groupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GroupTypes.SET_CURRENT_GROUP:
        let currentGroup:Groups = action.payload.currentGroup
            return {
                ...state,
                currentGroup: currentGroup

            }
        case GroupTypes.GET_ALL_GROUPS:
            let newArray:Groups[] = [...action.payload.groups];
            return {
                ...state,
                allGroups: newArray
            }
        case GroupTypes.FAILED_TO_GET_ALL_GROUPS:
            return {
                ...state,
            }
        case GroupTypes.ADD_RECEIPT:
            let newReceipt:Receipt = action.payload.receipt
            return {
                ...state,
                newReceipt: newReceipt
            }
        case GroupTypes.UPDATE_RECEIPT_NAME:
            let receiptName:string = action.payload.receiptName
            return {
                ...state,
                newReceipt: {
                    ...state.newReceipt,
                    receiptName: receiptName,
                }
            }
        case GroupTypes.ADD_LINE_TO_RECEIPT:
            let receiptLines = [...state.newReceipt.lines]
            receiptLines.push(action.payload.newLine);
            return {
                ...state,
               newReceipt: {
                   ...state.newReceipt,
                    lines: receiptLines
                }
            }
        case GroupTypes.UPDATE_LINE_NAME_TO_ADD:
            let lineName:string = action.payload.lineNameToAdd
            return {
                ...state,
                newLine: {
                    ...state.newLine,
                    lineName: lineName
                }
            }
        case GroupTypes.RESET_ADD_LINE_FORM:
            return {
                ...state,
                lineName: '',
                linePriceToAdd: '',
            }
        case GroupTypes.UPDATE_LINE_PRICE_TO_ADD:
            let linePrice:number = action.payload.linePriceToAdd
            return {
                ...state,
                newLine: {
                    ...state.newLine,
                    linePrice: linePrice
                }
            }
        case GroupTypes.RESET_ADD_LINE_NAME_FORM:
            return {
                ...state,
                newLine: {
                    ...state.newLine,
                    lineName: ''
                }
            }
        case GroupTypes.RESET_ADD_LINE_PRICE_FORM:
            return {
                ...state,
                newLine: {
                    ...state.newLine,
                    linePrice: 0
                }
            }
        case GroupTypes.FAILED_TO_SET_CURRENT_GROUP:
            return {
                ...state,
            }
        case logoutTypes.LOGOUT:
            return {
                allGroups: [],
                currentGroup: new Groups,
                newReceipt: new Receipt,
                newLine: new Line,
            }
    }
    return state;
}