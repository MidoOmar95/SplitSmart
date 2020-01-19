import { connect } from "react-redux";
import {claimReceipt, claimLine, populateCurrencies, initializeReceipts, finalizeReceipts, updateReceipts} from '../../actions/receipt/Receipt.actions'
import { IState } from "../../reducers";
import { ReceiptComponent } from "./Receipt.component";

//This is getting every field from the receipt state in the interface IState
const mapStateToProps = (state: IState, ownProps) => {
  return {
    // receipt: ownProps.receipt,
    groupReceipts: state.receipt.groupReceipts,
    user: state.login.user,
    currentGroup: state.group.currentGroup,

  }
}
//This is getting all of the actions that our receipt component will be able to call
const mapDispatchToProps = {
  initializeReceipts,
  claimReceipt,
  claimLine,
  finalizeReceipts,
  updateReceipts,
  populateCurrencies
}

//This statement gives all the above information to our component and as such
//this is the export we want when we make this component in our app.tsx, or anywhere else we need it
export default connect(mapStateToProps, mapDispatchToProps)(ReceiptComponent);