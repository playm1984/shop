import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

import './header.css'

class Header extends Component {
    render() {

        const {userPay} = this.props
        console.log(userPay.length);
        return (
            <div className="header">
                <div className='header-main'>
                    <div className='header-menu-btn'>
                        <Link to={'/'} className='btn' href='#'>
                            <span>Главная</span>
                        </Link>

                        <Link to={'/basket'} className='btn' href='#'>
                            {userPay.length >=1 ? <span>Корзина ({userPay.length})</span> : <span>Корзина</span>} 
                        </Link>
                    </div>
                    <h1 className='logo'>Concept</h1>
                    <div className='header-right'>
                        <div className='searh-header'>
                            <input type='text' className="search-img"></input>
                            <input type='text' placeholder='Найти вещь' className="search-input"></input>
                        </div>
                        <div className='header-login'>
                            <p>Войти</p>
                            <div className='log'></div>
                        </div>
                    </div>            
                </div>                         
            </div>
        )
    }
}

const mapStateToProps = ({userPay}) => {
    return{
        userPay
    }
}

export default connect (mapStateToProps)(Header)