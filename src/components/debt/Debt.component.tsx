import React from 'react';
import { IDebtState } from '../../reducers';
import { Users } from '../../models/Users';
import { getDebts, paidDebt, acceptDebt } from '../../actions/debt/Debt.actions';
import { DebtIdDisplayComponent } from './DebtId/DebtDisplay.component';
import { Redirect } from 'react-router';

interface IDebtProps {
    debt: IDebtState,
    user: Users,
    getDebts: (userId:number)=>void,
    paidDebt: (debtId:number)=>void,
    acceptDebt: (debtId: number)=>void,
}

export class DebtComponent extends React.Component<IDebtProps, any> {
    constructor(props) {
      super(props);
    }


    componentDidMount() {
      this.props.getDebts(this.props.user.userId);
    }

render() {
  if(this.props.user.userId === 0) {
    return (
        <Redirect to='/login'/>
    )
} else {

  const DebtDisplayComponent:any[] = [];
  for (const key of this.props.debt.allDebts) {
    let owes = false;
    if(key.sender.userId === this.props.user.userId){
      owes = true;
    }
    // This should work on working the buttons and changing them based on the user and the status,
    // but if it doesn't work then check this 
    DebtDisplayComponent.push(<DebtIdDisplayComponent key={key.debtId} debt={key} owes={owes} onClickPaid={()=>this.props.paidDebt(key.debtId)} onClickVerify={()=>this.props.acceptDebt(key.debtId)}/> 
    
      )   
  }
    return (
      <div>
        <table className="debtTable" id ="iou">
          <thead id="iou thead">
            <tr>
              <th scope="col">
                <div title="User1 Photo"></div>
              </th>
              <th scope="col">
                <div title="User1">User 1</div>
              </th>
              <th scope="col">
                <div title="iou">IOU</div>
              </th>
              <th scope="col">
                <div title="User2 Photo"></div>
              </th>
              <th scope="col">
                <div title="User2">User 2</div>
              </th>
              <th scope="col">
                <div title="Amount">Amount</div>
              </th>
              <th scope="col">
                <div title="Status">Status</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {DebtDisplayComponent}
          </tbody>
        </table>
      </div>
    )
  }
}

}