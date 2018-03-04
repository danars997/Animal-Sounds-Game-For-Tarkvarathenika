import React, { Component } from 'react';
import Top from '../Top/index';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './logo.jpg';

export default class extends Component {

    render() {
        return (
            <div className="Nav">
                <Top/>
                <img className='topImage' src={logo}/>
                <Top/>
                <nav className='navbar navbar-default'>
                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>

                        <ul className='nav navbar-nav nav-main'>
                            <li>
                                <NavLink to='/shop' activeClassName='active'>SHOP</NavLink>
                            </li>
                            <li>
                                <NavLink to='/aboutUs' activeClassName='active'>ABOUT US</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
