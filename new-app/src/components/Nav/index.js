import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default class extends Component {

    render() {
        return (
            <nav className='nav-container container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <ul className='custom-nav col-12 col-lg-8'>
                            <li>
                                <NavLink to='/shop' activeClassName='active'>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='/catagories' activeClassName='active'>Catagories</NavLink>
                            </li>
                            <li>
                                <NavLink to='/aboutUs' activeClassName='active'>About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
