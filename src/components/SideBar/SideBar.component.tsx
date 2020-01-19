import React from 'react';
import { ILoginState } from '../../reducers';
import { NavLink } from 'react-router-dom';
import { Users } from '../../models/Users';
import { Fragment } from 'react';
import  ModalAGComponent  from '../modals/ModalAG.container';
import { Groups } from '../../models/Groups';

/*This component is the navigation bar we will use at the top of our site for navigation purposes.
*/
interface ISideBarProps {
    user: Users,
    sideDrawerOpen: boolean,
    allGroups: Groups[],
    backdropClick: () => void,
    setCurrentGroup:(currentGroup:Groups) => void,
}

//MAKES SURE THIS DOESNT SHOW WHEN NOT LOGGED IN!!!!! ALEC DO IT!!!!!
export class SideBarComponent extends React.Component<ISideBarProps, any> {
    constructor(props) {
        super(props);

    }

    setCurrentGroup = (currentGroup: Groups) => {
        this.props.setCurrentGroup(currentGroup);
    }

    render() {
        //I THINK MOVING THE TOOLBAR AWAY IS FINE BECAUSE OF REDUX
        //SIDEDRAWER HAS ALL THE ACTUAL STUFF


        


        if(this.props.user.userId === 0)
        {
            return (
                <div>

                </div>
            )
        }else {
          
          let sidebarHtml:any[] = [];
        console.log(this.props.allGroups)
        if(this.props.allGroups) {
            for(const key of this.props.allGroups){
                sidebarHtml.push(
                    <tr key={'group' + key.groupId}>
                        <td>{key.groupName}</td>
                        <td><img src={key.groupPicture} width="70" height="70"/></td>
                        <td><button onClick={() => this.setCurrentGroup(key)}>View Group</button></td>
                    </tr>
                )
            }
        }

        return (
            <div style={{ height: '100%' }}>
                {this.props.sideDrawerOpen ? <nav className='side-drawer open'>
                    <div className="sidebarTop">
                        <span className="groupHeading">Groups</span>
                    </div>
                    <div className='group-sidebar-display'>
                    {/* //add table html stuff */}
                    <table className="table-list-of-groups">
                        <tbody>
                            {sidebarHtml}

                        </tbody>
                    </table>
                    </div>
                    <ModalAGComponent type="AddGroup" name="Add a Group" className="addAGroupBtn"/>
                    <ul>
                        <li><NavLink to={{
                            pathname: '/'
                        }}></NavLink></li>
                        <li><NavLink to={{
                            pathname: '/'
                        }}></NavLink></li>
                    </ul>
                </nav> : <nav className='side-drawer close'></nav>}
                {
                    this.props.sideDrawerOpen ?
                        <div className="backdrop" onClick={this.props.backdropClick} /> : null}

                <main style={{ marginTop: "64px" }}></main>
            </div>
        )
      }
    }
}