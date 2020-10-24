import React, { Component } from 'react'

import './open-log.css'

export default class LogOpen extends Component {
    render() {
        return (
            <div className='log-open'>
                <div className='log-open_inner'>
                    <h1 className='inner-title'>Войти</h1>
                    <input type='text' className='inner-inp' placeholder='Логин'/>
                    <input type='text' className='inner-inp' placeholder='Пароль'/>
                    <button className='inner-btn'>Войти</button>
                </div>             
            </div>
        )
    }
}
