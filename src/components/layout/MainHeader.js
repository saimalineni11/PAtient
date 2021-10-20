import React from 'react';
import hcx_logo from '../../assets/images/HCX-white.svg';
import deloitte_logo from '../../assets/images/deloitte_logo.png';
import "./MainHeader.css";

function AppHeader({ initiative }) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg ctc-header-bg">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <img src={hcx_logo} alt="Hcx" style={{ height: 15 }} />
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <img src={deloitte_logo} style={{ maxWidth: 100, marginRight: 10 }} alt="Deloitte" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppHeader