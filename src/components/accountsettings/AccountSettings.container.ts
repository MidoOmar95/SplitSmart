import { connect } from 'react-redux';
import {
    updateUsername, updateDisplayName, updatePassword, updateFirstName, updateLastName, updateEmail,
    updateProfilePicture, updatePhoneNumber, deactivateAccount, clearMessage, updateUser, updateUserId
} from '../../actions/accountsettings/AccountSettings.actions';
import { IState } from '../../reducers/index';
import { AccountSettingsComponent } from './AccountSettings.component';
//container
const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        updatedUser: state.accountSettings.updatedUser,
    }
}
const mapDispatchToProps = {
    updateUsername,
    updateDisplayName,
    updatePassword,
    updateFirstName,
    updateLastName,
    updateEmail,
    updateProfilePicture,
    updatePhoneNumber,
    deactivateAccount,
    clearMessage,
    updateUser,
    updateUserId
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountSettingsComponent);