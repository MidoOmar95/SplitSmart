import React from 'react'

import { Users } from '../../models/Users';
import { getUserProfile } from '../../actions/profileinfo/ProfileInfo.actions';
import  ModalAGComponent  from '../modals/ModalAG.container';
import { Redirect } from 'react-router';

interface IProfileInfo {
    user: Users,
    params: any,
    profileUser: Users,
    getUserProfile: (username: string) => void
}

export class ProfileInfoComponent extends React.Component<IProfileInfo, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserProfile(this.props.params.sort);
    }

    componentDidUpdate() {
        if(this.props.profileUser.username !== this.props.params.sort){
            this.props.getUserProfile(this.props.params.sort);
        }
    }

    render() {
        // const params = qs(this.props.ownProps.location.search)
        // console.log(this.props.ownProps.location.search)
        // console.log(params.sort)
        if(this.props.user.userId === 0) {
            return (
                <Redirect to='/login'/>
            )
        } else
        return (
           
            <div className="surroundingBox">
                <div className="profile">
                    <h1>{this.props.profileUser.firstName} {this.props.profileUser.lastName}</h1>
                </div>
               {/* //DUNISEKI SAVE US */}
                <div className="picture">
                    <img src={this.props.profileUser.picture && this.props.profileUser.picture.toString()} width="160" height="170"></img>
                  
                </div>
                <div className="line"></div>
                <div className="profileInfoBox">
                <div className="profileInfo">Profile
               
                </div>
                <label>Username: {this.props.profileUser.username}</label>
                <br/>
                <br/>
                <label>Display Name: {this.props.profileUser.displayName}</label>
                <br/>
                <br/>
                <label>Password: {this.props.profileUser.password}</label>
                <br/>
                <br/>
                <label>First Name: {this.props.profileUser.firstName}</label>
                <br/>
                <br/>
                <label>Last Name: {this.props.profileUser.lastName}</label>
                <br/>
                <br/>
                <label>Email: {this.props.profileUser.email}</label>
                <br/>
                <br/>
                <label>Phone: {this.props.profileUser.phone}</label>
                <hr/>
                
                {/* <button className="buttonSettings"  data-toggle="dropdown" type="submit">Settings</button> */}
                <ModalAGComponent type="AccountSettings" name="Account Settings" className="profileInfoBtn"/>
                </div>
                
               
            </div>
            

        )
    }
}
