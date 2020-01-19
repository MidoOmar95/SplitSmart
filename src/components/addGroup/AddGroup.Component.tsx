import React from 'react';
import { ILoginState } from '../../reducers';
import { Users } from '../../models/Users';
import { Url } from 'url';
import { Groups } from '../../models/Groups';

interface IAddGroupProps {
    user: Users,
    newGroup: Groups,
    usernameToAdd: string,
    updateGroupName: (groupName: string) => void,
    updateGroupPicture: (Url: Url) => void,
    updateGroupDescription: (groupDescription: string) => void,
    inviteUserToGroup: (username: string) => void,
    createGroup: (newGroup: Groups) => void,
    updateGroupOwner: (ownerId: Users) => void,
    resetAddForm: (usernameToAdd: string) => void,
    updateUserToAdd: (usernameToAdd: string) => void
}

export class AddGroupComponent extends React.Component<IAddGroupProps, any> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.updateGroupOwner(this.props.user)
    }
    createGroup = (event) => {
        event.preventDefault(); //prevent default form submission
        //this.props.inviteUserToGroup(this.props.user.username);
        this.props.createGroup(this.props.newGroup);
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
        this.props.resetAddForm(event.target.value)
    }
    updateUserToAdd = (event) => {
        event.preventDefault();
        this.props.updateUserToAdd(event.target.value)
    }
    resetAddForm = (event) => {
        this.props.resetAddForm(event.target.value)
    }

    render() {

        let invitedUsers:any[] = [];
        for(const key of this.props.newGroup.groupMembers){
            invitedUsers.push(<tr><td>{key.username}</td></tr>);
        }
        //console.log(this.props.newGroup)
        return (
            <div className="add-group-page">
                <form onSubmit={this.createGroup} className="add-group-form">
                    <table id='add-group-header'>
                        <tbody>
                            <tr>
                                <th>Group Name</th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text"
                                        id="Group Name"
                                        className="text-form"
                                        placeholder="Group Name"
                                        value={this.props.newGroup.groupName}
                                        onChange={this.updateGroupName}
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>

                                    <input type="text"
                                        id="Group Description"
                                        className="text-form"
                                        placeholder="Description"
                                        value={this.props.newGroup.groupDescription}
                                        onChange={this.updateDescription}
                                        required />
                                </td>
                            </tr>
                            <tr><th>Picture</th></tr>
                            <tr>
                                <td>
                                    <input type="url"
                                        id="Group Picture"
                                        className="text-form"
                                        placeholder="URL"
                                        value={this.props.newGroup.groupPicture}
                                        onChange={this.updateGroupPicture}
                                         />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button-form" type="submit">Create</button>
                </form>
                <form onSubmit={this.inviteUserToGroup} onReset={this.resetAddForm} className="invite-user-to-group-form">
                    <table id='add-group-header'>
                        <tbody>
                            <tr><th>Invites</th></tr>
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
                    <button className="button-form" type="submit">Add User</button>
                    <button className="button-form" type="reset">Reset Entry</button>
                </form>
            </div >
        );
    }
}