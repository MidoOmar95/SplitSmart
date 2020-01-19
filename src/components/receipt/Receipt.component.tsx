import React from 'react';
import { IGroupState } from '../../reducers';
import { ReceiptDisplayComponent } from './Receipt.display.component';
import { Receipt } from '../../models/Receipt';
import { Line } from '../../models/Line';
import { Item } from '../../models/Item';
import { Users } from '../../models/Users';
import { Groups } from '../../models/Groups';
import { updateReceipts, populateCurrencies } from '../../actions/receipt/Receipt.actions';
import { ssClient } from "../../axios/ss.client";


//requires the importing of Line and Item classes, which should also be in Store
 
 const uID = 1;
 const lineID = 1;
 const receiptID = 0;
 let receiptTest : Receipt[]
 let receiptLines : Line[]

//passing everything thru props
interface IGroupProps {
    // receipt: Receipt,
    user: Users,
    groupReceipts: Receipt[],
    currentGroup: Groups,
    //lines have a 1:M relationship with items
    initializeReceipts: (groupId: number)  => void,
    claimReceipt: (receiptID: number, claimant:number) => void, //as a user I would like to be able to claim a receipt
    claimLine: (receiptID: number, claimant:Users, claimed: number) => void, //as a user I would like to be able to claim a line
    finalizeReceipts:(receipt:Receipt) => void,
    updateReceipts:(receipt:Receipt) => void,
  }
export class ReceiptComponent extends React.Component<IGroupProps, any> {
  constructor(props) {
    super(props);
  }

// whenever the change the username input, call the updateUsername action with the value
initializeReceipts = (groupId: number) => {
  this.props.initializeReceipts(groupId) 
}

// whenever the change the username input, call the updateUsername action with the value
claimReceipt = (id:number, claimant:number) => {
  this.props.claimReceipt(id, claimant) 
}

// whenever the change the username input, call the updateUsername action with the value
claimLine = (receiptID:number, claimant:Users, lineID: number) => {
  this.props.claimLine(receiptID, claimant, lineID) 
}

finalizeReceipts = (receipt:Receipt) => {
  this.props.finalizeReceipts(receipt);
}
updateReceipt = (receipt:Receipt) => {
  this.props.updateReceipts(receipt)
}



componentDidMount()
{
  // if(this.props.currentGroup){
  //     this.props.initializeReceipts(this.props.currentGroup.groupId);
  // }
  //this.props.populateCurrencies();

}


  render() {
     
//let firstLine = this.props.receipt.lines[0];
//let firstItem = firstLine.items[0];

//firstItem.itemName = "Test";
 

    //create some fake receipt array
    
    let receiptHTML : any = [];



    let itr_1 = 0;
    for (let key of this.props.groupReceipts)
    {
      //alert(JSON.stringify(this.props.groupReceipts[itr_1]));
      let onClickFuncs : any = [];
      for (let i = 0; i < this.props.groupReceipts[itr_1].lines.length; i++)
      {
          onClickFuncs.push(()=>{this.props.claimLine(key.receiptId, this.props.user, i);});
      }
      receiptHTML.push(<ReceiptDisplayComponent rid = {itr_1+1} user = {this.props.user} finalize={()=>this.finalizeReceipts(key)} onClick1={()=>{this.props.claimReceipt(key.receiptId, 0); alert(key.receiptId)} }  onClick2={onClickFuncs} claimReceipt = {this.claimReceipt} claimItem = {this.claimLine} receipt={key}></ReceiptDisplayComponent>);
      itr_1++;
    }


    
    return (<div>    <div className = "currenciesSelectTitle"><br />  
    
    </div>
    <div className = "receiptHeader">Receipts for Group "{this.props.currentGroup && this.props.currentGroup.groupName}"<br /><br/>   
    
</div><div className="receiptComponent">{receiptHTML}</div></div>)
  

}
}