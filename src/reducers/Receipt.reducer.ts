import { IGroupState } from ".";
import { receiptTypes } from "../actions/receipt/Receipt.actions";
import { Receipt } from "../models/Receipt";
import { Line } from "../models/Line";
import { Item } from "../models/Item";
import { Groups } from "../models/Groups";
import { logoutTypes } from "../actions/logout/Logout.actions";

//this is our intialstate of the interface we declared for the receipt component
const initialState: IGroupState = {
        groupReceipts: [],
        currentGroup: new Groups,
}



export const receiptReducer = (state = initialState, action: any) => {
  switch (action.type) {

    
      //same as up above
      case receiptTypes.INITIALIZE_RECEIPTS:
      {
        { //set receipts to be action.payload.data take a group id and fetch every receipt from that group id
          return {
              ...state,
              groupReceipts : action.payload.receipt,
          }
          }
        }
     
 
      //same as up above
    case receiptTypes.CLAIM_RECEIPT:
    {
      let newGroupReceipts = state.groupReceipts.slice()
    newGroupReceipts[action.payload.receiptID].claimant = action.payload.claimant;

    return {
        ...state,
        groupReceipts : newGroupReceipts,
    }
    }
    //same as up above
    case receiptTypes.CLAIM_LINE:
    {

      //return a new object so redux actually updates the page
      let newGroupReceipts = state.groupReceipts.slice()

      //create the new item to be added to the line
      let l = new Item(action.payload.claimant); l.itemClaimant = action.payload.claimant;
      
      //get a reference to the receipt we're changing
      let changedReceipt = newGroupReceipts.findIndex((element : Receipt)=>{return element.receiptId === action.payload.receiptID})
      let changedItem = newGroupReceipts[changedReceipt].lines[action.payload.claimed].items.findIndex(
        (element : Item)=>{return element.itemClaimant === action.payload.claimant})

      //if we are agreeing to help split the bill and we've already agreed to help, then remove our item
      if (changedItem != -1)
      {
      newGroupReceipts[changedReceipt].lines[action.payload.claimed].items.splice(changedItem)
      }

      //if we are agreeing to help split the bill, then add a new item to this line
      if (changedItem == -1)
      {
      newGroupReceipts[changedReceipt].lines[action.payload.claimed].items = 
      newGroupReceipts[changedReceipt].lines[action.payload.claimed].items.concat([l])
      }

      //alert(JSON.stringify(changedReceipt));
      
      newGroupReceipts = newGroupReceipts.slice();
      //newGroupReceipts =

        //newGroupReceipts[action.payload.receiptID].lines[action.payload.claimed].claimant = action.payload.claimant;
    
        return {
            ...state,
            groupReceipts : newGroupReceipts,
        }
    }
    case receiptTypes.FINALIZE_RECEIPT:
      return {
        ...state
      }
      case receiptTypes.POPULATE_CURRENCIES:
      return {
        ...state
      }
    case receiptTypes.UPDATE_RECEIPTS:
      let newGroupReceipts = [...state.groupReceipts]
      for (let key of newGroupReceipts) {
        if(key.receiptId === action.payload.receipt.receiptId){
          key = action.payload.receipt;
        }
      }
      return{
        ...state,
        groupReceipts: newGroupReceipts
      }
    case logoutTypes.LOGOUT:
            return {
              groupReceipts: [],
              currentGroup: new Groups,
            }
 
  }
  return state;
}