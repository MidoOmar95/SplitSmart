import React from 'react';
import {Item} from '../../models/Item';
import {Receipt} from '../../models/Receipt';
import { claimReceipt } from '../../actions/receipt/Receipt.actions';
import { Users } from '../../models/Users';

interface iReceiptProps{
    receipt: Receipt,
    user: Users,
    rid: number
}
export class ReceiptDisplayComponent extends React.Component<any, any> {

  constructor(props : any) {
    super(props);
  }



  render() {
    let receiptHTML : any = [];


    receiptHTML.push(<div className="receiptName" >
      <br /> <br /> <div className = "receiptTitle">Receipt Name: {this.props.receipt.receiptName}</div>

      <p>
      {(this.props.receipt.receiptClaimant === undefined) ? "No one has claimed this receipt!" : "Receipt Claimant:"}   {(this.props.receipt.receiptClaimant.username == "") ? "" : this.props.receipt.receiptClaimant.username}  
      </p>
      {/* <p> */}
      {/* Claim Receipt:  <input onClick={this.props.onClick1} type="checkbox" id="scales" name="scales" */}
     {/* ></input> */}
      {/* </p> */}
      <p>
      Purchases: 
      </p>
      </div>
    );

      let tempJSX : any = [];
      for (let i = 0; i < this.props.receipt.lines.length; i++)
      {
        tempJSX.push(<div><hr></hr></div>);
        tempJSX.push(<div><button className = "splitPurchaseButton" onClick={this.props.onClick2[i]}
        >$plit Purchase</button></div>)
        tempJSX.push(<React.Fragment><br></br></React.Fragment>)

        tempJSX.push(<React.Fragment><div className = "lineTitle">Purchase Name: {this.props.receipt.lines[i].lineName}</div></React.Fragment>)


        tempJSX.push(<p>Price Before Split: {this.props.receipt.lines[i].linePrice}</p>);
        tempJSX.push(<p>Equal Price Split:</p>);

              for (let j = 0; j < this.props.receipt.lines[i].items.length; j++)
              {
                tempJSX.push(<div>{this.props.receipt.lines[i].items[j].itemClaimant.firstName} has agreed to pay ${Math.round(this.props.receipt.lines[i].linePrice/(this.props.receipt.lines[i].items.length)*100)/100}  </div>)
                tempJSX.push(<img className = "itemClaimantImg" src = {this.props.receipt.lines[i].items[j].itemClaimant.picture}></img>);
              }
        

        receiptHTML.push(<div>{tempJSX}</div>)
        tempJSX = [];
      }

      receiptHTML.push(<p></p>)
      receiptHTML.push(<div><button onClick={this.props.update} className = "saveChangesButton"  >Save Changes</button></div>)
      receiptHTML.push(<div><button onClick={this.props.finalize} className = "finalizeReceiptButton" >Finalize Receipt</button></div>)
     
      receiptHTML.push(<div><hr></hr></div>);
    
      let randRed = Math.round(80*Math.random());
      let randGreen = Math.round(80*Math.random());
      let randBlue = Math.round(80*Math.random());
      let randColor : any = 'rgba('+randRed+','+randGreen+','+randBlue+',1)'
      let classN = "receipt-"+this.props.rid;
      return (
      <div className={classN}>

          {receiptHTML}
      
 
      </div>
    )
  }

} 