import React from 'react';
import { ILoginState } from '../../reducers';
import { Users } from '../../models/Users';
import { Url } from 'url';
import { Groups } from '../../models/Groups';

interface IGroupSettingsProps {
    user: Users,
    currentGroup: Groups,
    usernameToAdd: string,
    updatedGroup: Groups,
    updateGroupName: (groupName: string) => void,
    updateGroupPicture: (picture: string) => void,
    updateGroupDescription: (groupDescription: string) => void,
    inviteUserToGroup: (username: string) => void,
    resetAddForm: (usernameToAdd: string) => void,
    updateUserToAdd: (usernameToAdd: string) => void,
    updateGroup: (updatedGroup: Groups) => void,
    initializeGroupSettings: (currentGroup: Groups) => void,
}

export class GroupSettingsComponent extends React.Component<IGroupSettingsProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.initializeGroupSettings(this.props.currentGroup);
        this.props.updateGroupDescription(this.props.currentGroup.groupDescription);
        this.props.updateGroupName(this.props.currentGroup.groupName)
        this.props.updateGroupPicture(this.props.currentGroup.groupPicture);
    }


    updateGroup = (event) => {
        this.props.updateGroup(event.target.value)
    }
    updateGroupName = (event) => {
        event.preventDefault(); //prevent default form submission
        this.props.updateGroupName(event.target.value);
    }
    updateDescription = (event) => {
        this.props.updateGroupDescription(event.target.value);
    }
    updateGroupPicture = (event) => {
        event.preventDefault();
        this.props.updateGroupPicture(event.target.value);
    }
    inviteUserToGroup = (event) => {
        event.preventDefault();
        this.props.inviteUserToGroup(this.props.usernameToAdd)
    }
    updateUserToAdd = (event) => {
        event.preventDefault();
        this.props.updateUserToAdd(event.target.value)
    }
    resetAddForm = (event) => {
        this.props.resetAddForm(event.target.value)
    }

    render() {
        //console.log(this.props.newGroup)
        let invitedUsers:any[] = [];
        for(const key of this.props.updatedGroup.groupMembers){
            invitedUsers.push(<tr><td>{key.username}</td></tr>);
        }

        return (
            <div className="group-settings-page">
                <form onSubmit={this.updateGroup} className="group-settings-form">
                    <table id='group-settings-header'>
                        <tbody>
                            <tr id='group-settings-row'>
                                <th>Group Name</th>
                                <th>Description</th>
                                <th>Picture</th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text"
                                        id="Group Name"
                                        className="text-form"
                                        placeholder="Group Name"
                                        value={this.props.updatedGroup.groupName}
                                        onChange={this.updateGroupName}
                                        required />
                                </td>
                                <td>
                                    <input type="text"
                                        id="Group Description"
                                        className="text-form"
                                        placeholder="Description"
                                        value={this.props.updatedGroup.groupDescription}
                                        onChange={this.updateDescription}
                                        required />
                                </td>
                                <td>
                                    <input type="url"
                                        id="Group Picture"
                                        className="text-form"
                                        placeholder="URL"
                                        value={this.props.updatedGroup.groupPicture}
                                        onChange={this.updateGroupPicture}
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="addUserBtn" type="submit">Add User</button>
                    
                </form>
                <form onSubmit={this.inviteUserToGroup} onReset={this.resetAddForm} className="invite-user-to-group-form">
                    <table id='group-settings-header'>
                        <tbody>
                            <tr id='group-settings-row'>
                            <th >
                                Invites
                            </th>
                            </tr>
                            {invitedUsers}
                            <tr>
                                <td>
                                    <input type="text"
                                        id="Invite User To Group"
                                        className="addUserToGroup"
                                        placeholder="Invite User"
                                        value={this.props.usernameToAdd}
                                        onChange={this.updateUserToAdd}
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <button className="createBtn" type="submit">Create</button>
                    <button className="resetEntryBtn" type="reset">Reset Entry</button>
                </form>
            </div >
        );
    }
}