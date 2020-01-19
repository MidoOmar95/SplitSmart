import { connect } from "react-redux";
import {getDebts,paidDebt,acceptDebt} from '../../actions/debt/Debt.actions'
import { IState } from "../../reducers";
import { DebtComponent } from "./Debt.component";

const mapStateToProps = (state: IState) => {
    return {
      debt: state.debt,
      user: state.login.user,
    }
  }

  const mapDispatchToProps = {
    getDebts,
    paidDebt,
    acceptDebt,    
  }

  export default connect(mapStateToProps, mapDispatchToProps)(DebtComponent);