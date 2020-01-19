import { connect } from "react-redux";
import { IState } from "../../reducers";
import { LogOutComponent } from '../logout/Logout.component';
import {logout} from '../../actions/logout/Logout.actions'

//This is getting every field from the login state in the interface IState
const mapStateToProps = (state: IState) => {
  return {

  }
}
//we could also do this instead
// user: state.login.user,
// username: state.login.username,
// password: state.login.password
// feedbackMessage: stat.login.feedbackMessage

//This is getting all of the actions that our login component will be able to call
const mapDispatchToProps = {
 logout,
}

//This statement gives all the above information to our component and as such
//this is the export we want when we make this component in our app.tsx, or anywhere else we need it
export default connect(mapStateToProps,mapDispatchToProps)(LogOutComponent);