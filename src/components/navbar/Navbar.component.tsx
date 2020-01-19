import React, { Fragment } from 'react';
import { ILoginState } from '../../reducers';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { Users } from '../../models/Users';
import { FaUserAlt, FaSearch, FaArrowLeft } from 'react-icons/fa';

import Modal from 'reactstrap/lib/Modal';

/*
This component is the navigation bar we will use at the top of our site for navigation purposes.
*/

interface INavbarProps extends RouteComponentProps<{}> {
    user: Users,
    drawerToggle: () => void,
    logout: () => void
}

export class NavBarComponent extends React.Component<INavbarProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            searchField: ''
        }
    }


    search = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(event.target)
        this.props.history.push(`/profile?sort=${this.state.searchField}`)
        this.setState({
            searchField: ''
        })
    }

    updateSearch = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <header className="toolbar">
                    <nav className="toolbar_navigation">
                        <div className="toolbar_toggle-button">
                            <button className="toggle-button" onClick={this.props.drawerToggle}>
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                            </button>
                        </div>
                        <div className="toolbar_toggle"><NavLink to={{
                            pathname: '/login'
                        }}><img className="logoThing" src="https://i.postimg.cc/RVc10x1x/logo.png" /></NavLink></div>
                        <div className="splitsmart" style={{ textAlign: "center" }}>Split$mart</div>
                        <div className="spacer"></div>
                        <div className="toolbar_navigation-items">

                            <ul>

                                <li><NavLink to={{
                                    pathname: '/profile',
                                    search: `?sort=${this.props.user.username}`,
                                    state: { fromDashboard: true }
                                }}><FaUserAlt />&nbsp;
                                {this.props.user.firstName} {this.props.user.lastName}</NavLink></li>
                                                              
                                <li><NavLink className='innerNavBar' to={{
                                    pathname: '/ious',
                                    state: { fromDashboard: true }
                                }} > IOUs</NavLink></li>
                                <li><NavLink className='innerNavBar' to={{
                                    pathname: '/group',
                                    state: { fromDashboard: true }
                                }} > Groups</NavLink></li>
                                {
                                    (this.props.user.displayName) ?
                                        <li>
                                            <NavLink to={{
                                                pathname: '/login',

                                            }}></NavLink></li>
                                        :
                                        <li>
                                            <NavLink to={{
                                                pathname: '/login',

                                            }}>Login</NavLink></li>
                                }

                                {
                                    (this.props.user.displayName) ?
                                        <li><NavLink onClick={this.props.logout} className="logoutShown" to={{
                                            pathname: '/logout',
                                        }} >Logout</NavLink></li>
                                        :
                                        <li><NavLink onClick={this.props.logout} className="logoutShown" to={{
                                            pathname: '/logout',
                                        }}></NavLink></li>
                                }

                                <li> <form className="form-inline my-2 my-lg-0" style={{ float: "right" }} onSubmit={this.search}>
                                    <button className="btn btn-danger my-2 my-sm-0" type="submit">< FaSearch /></button>
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchField} onChange={this.updateSearch} />
                                </form></li>

                            </ul>
                        </div>
                    </nav>
                    <div className="currencies">
                        <select className="custom-select">
                            <option value="USD" >United States Dollars- USD</option>
                            <option value="EUR">Euro- EUR</option>
                            <option value="GBP">United Kingdom Pounds- GBP</option>
                            <option value="CAD">Canadian Dollars- CAD</option>
                            <option value="RUR">Russia Rubles- RUR</option>
                            <option value="JPY">Japan Yen- JPY</option>
                        </select>
                    </div>
                </header>
            </Fragment>

        )
    }
}