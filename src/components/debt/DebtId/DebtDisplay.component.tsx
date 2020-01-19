import React from 'react';
import { Users } from '../../../models/Users';
import { Debts } from '../../../models/Debts';
import Button from 'reactstrap/lib/Button';

interface IDebtIdDisplayProps {
    debt: Debts,
    owes: boolean,
    onClickPaid: () => void,
    onClickVerify: () => void,
}

export class DebtIdDisplayComponent extends React.PureComponent<IDebtIdDisplayProps, any> {

 constructor(props : any) {
    super(props);
  }


  render() {
    return (
      <>
      {
        <tr>
          <td >{this.props.debt.sender.picture && <img className="picture1" src={this.props.debt.sender.picture.toString()} width="140"/>} </td>
          <td >{this.props.debt.sender.displayName} </td>
          <td >This person owes</td>
          <td >{this.props.debt.claimer.picture && <img src={this.props.debt.claimer.picture.toString()}/>} </td>
          <td >{this.props.debt.claimer.displayName}</td>
          <td >$ {this.props.debt.debtAmount}</td>
      <td >{(this.props.owes && !this.props.debt.paid) && <button className="button3" onClick={this.props.onClickPaid}>Send Payment</button>}
      {(this.props.debt.paid && !this.props.debt.verified && !this.props.owes) && <button className="button2" onClick={this.props.onClickVerify}>Verify Payment</button>}
      {(this.props.owes && this.props.debt.paid && !this.props.debt.verified) && <p>Awaiting Verification</p>}
      {(this.props.debt.verified && this.props.debt.paid) && <p>Debt Resolved</p>}
      {(!this.props.owes && !this.props.debt.paid) && <p>Awaiting Payment</p>}</td>
        </tr>}
      
      </>
    )
  }

}