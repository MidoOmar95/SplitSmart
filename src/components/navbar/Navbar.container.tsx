   
import { connect } from "react-redux";
import { drawerToggle} from '../../actions/sidebar/Sidebar.actions';
import {logout} from '../../actions/login/Login.actions';
import { withRouter } from 'react-router';

import { IState } from "../../reducers";
import { NavBarComponent } from "./Navbar.component";

//This is getting every field from the Navbar state in the interface IState
const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        sideDrawerOpen: state.sideBar.sideDrawerOpen,
    }
}

const mapDispatchToProps = {
    drawerToggle,
    logout,
}

//This is getting all of the actions that our Navbar component will be able to call

//This statement gives all the above information to our component and as such
//this is the export we want when we make this component in our app.tsx, or anywhere else we need it
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBarComponent));
