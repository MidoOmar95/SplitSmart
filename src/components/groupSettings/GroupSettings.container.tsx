import { IState } from "../../reducers";
import { GroupSettingsComponent } from "./GroupSettings.component";
import { connect } from "react-redux";
import { initializeGroupSettings, updateGroupPicture, updateGroupName, updateGroupDescription, inviteUserToGroup, updateGroup, resetAddForm, updateUserToAdd } from "../../actions/GroupSettings/GroupSettings.actions";
import { string } from "prop-types";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        usernameToAdd: state.groupSettings.usernameToAdd,
        currentGroup: {},//from group component once we make it
        updatedGroup: state.groupSettings.updatedGroup
    }
}

const mapDispatchToProps = {
    updateGroupName,
    updateGroupPicture,
    updateGroupDescription,
    inviteUserToGroup,
    updateGroup,
    resetAddForm,
    updateUserToAdd,
    initializeGroupSettings
}


export default connect(mapStateToProps, mapDispatchToProps)(GroupSettingsComponent);