import { connect } from "react-redux";
import { backdropClick } from '../../actions/sidebar/Sidebar.actions';
import { IState } from "../../reducers";
import { SideBarComponent } from "./SideBar.component";
import {setCurrentGroup} from '../../actions/Group/Group.action'

//This is getting every field from the Navbar state in the interface IState
const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        sideDrawerOpen: state.sideBar.sideDrawerOpen,
        allGroups: state.group.allGroups

        //pass in boolean for display
        //also action for toggleing display
    }
}

const mapDispatchToProps = {
    backdropClick,
    setCurrentGroup,
}

//This is getting all of the actions that our Navbar component will be able to call

//This statement gives all the above information to our component and as such
//this is the export we want when we make this component in our app.tsx, or anywhere else we need it
export default connect(mapStateToProps, mapDispatchToProps)(SideBarComponent);