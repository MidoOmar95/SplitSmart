import { combineReducers } from "redux";
import { Users } from "../models/Users";
import { Line } from "../models/Line";


import { loginReducer } from "./Login.reducer";
import { receiptReducer } from "./Receipt.reducer";
import { Receipt } from "../models/Receipt";
import { accountSettingsReducer } from "./AccountSettings.reducer";
import { profileInfoReducer } from "./ProfileInfo.reducer";
import { registerReducer } from "./Register.reducer";

import { Debts } from "../models/Debts";
import { DebtReducer } from "./Debt.reducer";

import { Groups } from "../models/Groups";
import { GroupSettingsReducer } from "./GroupSettings.reducer";
import { addGroupReducer } from "./AddGroup.reducer";
import { sideBarReducer } from "./Sidebar.reducer";
import { modalAGReducer } from "./ModalAG.reducer";
import { groupReducer } from "./Group.Reducer";





//this represents the state needed by one of our components.
//To log in, we need to keep track of the username and password that the use inputs
//And we need to set the error message if they fail, and get the user info if they succeed
//this information is then checked out in the Login.container file
export interface ILoginState {
    user: Users,
    username: string,
    password: string,
    feedbackMessage: string
}

//this represents the state needed by one of our components.
//To we need to keep track of the receipt's lines (which include items) and the receipt claimants (One receipt may have multiple claimants)

export interface IReceiptState{
    lines: Line[],
    claimant: number,
    
}


//The group state that we want to get the list of receipts from
export interface IGroupState{
    groupReceipts:any,
    currentGroup: Groups,

}

export interface IAccountSettingsState {
    updatedUser: Users
}


export interface IProfileInfoState {
    userProfile: Users
}

export interface IRegisterState {
    newUser: Users,
    registerFeedback: string
}

export interface IDebtState{
    allDebts: Debts[]
}


export interface IAddGroupState {
    newGroup: Groups,
    usernameToAdd: string,
}
export interface IGroupsState {
    allGroups: Groups[],
    currentGroup: Groups,
    newReceipt: Receipt,
    newLine: Line,

}
export interface IGroupSettingsState{
    usernameToAdd: string,
    updatedGroup: Groups,
}

export interface ISideBarState {
    sideDrawerOpen: boolean
}

export interface IModalAGState {
    showAGModal: string
}



//This interface represents the entirety of our store. All of the state of the program.
//We make it out of other more specific interfaces.
//Also, every interface here needs a reducer of the same name down in combine reducers
export interface IState {
    login: ILoginState,
    accountSettings: IAccountSettingsState,
    profileInfo: IProfileInfoState,
    receipt: IGroupState,
    register: IRegisterState,
    groupSettings: IGroupSettingsState,
    debt: IDebtState,
    addNewGroup: IAddGroupState,
    sideBar: ISideBarState,
    modalAG: IModalAGState,
    group: IGroupsState

}






//This needs a reducer with the name of every interface we have in the IState interface
export const state = combineReducers<IState>({
    login: loginReducer,
    accountSettings: accountSettingsReducer,
    profileInfo: profileInfoReducer,
    register: registerReducer,
    receipt: receiptReducer,
    groupSettings: GroupSettingsReducer,
    debt: DebtReducer,
    addNewGroup: addGroupReducer,
    sideBar: sideBarReducer,
    modalAG: modalAGReducer,
    group: groupReducer,





})