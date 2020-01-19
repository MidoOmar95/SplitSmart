import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Users } from '../../models/Users';

interface ILogOutProps {
    user: Users,
    logout: () => void
}


export class LogOutComponent extends React.Component<ILogOutProps, any> {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.logout();
    }

    render() {
        return (
            <Fragment>
                <div className="logoutMessage">
                    <span> You have been successfully logged out</span> <br />
                    <span >If you want to log back in, </span>
                    <Link className="linkText" to={{
                        pathname: '/login'
                    }}>Click Here</Link>
                </div>
            </Fragment>
        );

    }


}