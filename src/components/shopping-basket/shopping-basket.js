import React, { Component } from 'react'
import ShoppingBasketItem from '../shopping-basket-item'

import {connect} from 'react-redux'

import './shopping-basket.css'

class ShoppingBasket extends Component {
    render() {

        const {userPay} = this.props;
        console.log(userPay)
        return (
            <div className='shopping-basket'>
                <div className='shopping__inner'>
                    <div className='item__inner'>
                        {userPay.map(item => {
                                // const {payCountID} = item;
                                return(
                                    <ShoppingBasketItem key={item.payCountID}
                                        item={item}
                                    />
                                )
                            })}
                    </div>

                    <div className='total-price'>
                        <div className='total'>
                            <p className='total-p'>Итого</p>
                            <div className="line"></div>
                            <p className='number'>4 вещи</p>
                            <p className='price'>Общая сумма <span>12 300</span>тг</p>
                            <button className='total-btn'>Оформить</button>
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

export default connect (mapStateToProps)(ShoppingBasket)