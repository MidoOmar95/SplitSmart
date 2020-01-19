import React from 'react';
import {FaTwitter, FaFacebook, FaYoutube, FaLinkedinIn, FaInstagram, FaEnvelope} from 'react-icons/fa';

export class FooterComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className='footer'>
                <span className="copyright">&copy; 2019 Copyright - Spli$mart. All Rights Reserved.</span><br/>
                <span  className="connect">Connect with us: <FaTwitter className="social"/> <FaFacebook className="social"/>  <FaInstagram className="social"/>  <FaYoutube className="social"/> <FaLinkedinIn className="social"/>  <FaEnvelope/></span>
            </footer>
        );
    }
}