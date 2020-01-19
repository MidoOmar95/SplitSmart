import { IDebtState } from ".";
import { Debts } from "../models/Debts";
import { debtTypes } from "../actions/debt/Debt.actions";
import { logoutTypes } from "../actions/logout/Logout.actions";
// import { DebtTypes } from "../actions/debt/Debt.actions";

const initialState: IDebtState = {
    allDebts: []
  }

  export const DebtReducer = (state = initialState, action: any) => {

    switch (action.type) {
      case debtTypes.GET_DEBTS:
        return {
          ...state,
          allDebts: action.payload.debts
        }
      case debtTypes.PAID_DEBT:
        let newDebt = [...state.allDebts];
        for(let key of newDebt){
          if(key.debtId === action.payload.debts.debtId){
              key = action.payload.debts;
          }
        }
        return {
          ...state,
          allDebts: newDebt
        }
      case debtTypes.ACCEPT_PAYMENT:
      let newDebt2 = [...state.allDebts];
      for(let key of newDebt2){
        if(key.debtId === action.payload.debts.debtId){
            key = action.payload.debts;
        }
      }
        return {
          ...state,
          allDebts: newDebt2
        }
      case logoutTypes.LOGOUT:
        return {
            allDebts: []
        }
    }
    return state;
  }