import { connect } from "react-redux";
import {updatePassword, updateUsername, updateDisplayName, updateFirstName, updateLastName, updateEmail, updatePhone, registerRequest, clearMessage} from '../../actions/register/Register.actions'
import { IState } from "../../reducers";
import { RegisterComponent } from "./Register.component";


const mapStateToProps = (state: IState) => {
    return {
     register: state.register
    }
  }
  
  const mapDispatchToProps = {
    updatePassword,
    updateUsername,
    updateDisplayName,
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePhone,
    registerRequest,
    clearMessage
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);