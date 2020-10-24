import React, { Component } from 'react'

import './shopping-basket-item.css'

export default class ShoppingBasketItem extends Component {
    render() {
        const {img, title, delivery, deliveryDay, price, count} = this.props.item;
        return (
            <div className='total-items'>
                <div className='items'>
                    <div className='items-question'>
                        <div className='question'></div>
                    </div>
                    <div className='items-img'></div>
                    <div className='item-other'>
                        <p className='item'>{title}</p>
                        <div className='item-delivery'>
                            <p className='delivery'>{delivery}<span className='days'>{deliveryDay}</span></p>
                            <div className='plus-minus'>
                                <div className='minus'></div>
                                    <p>{count}</p>
                                <div className='plus'></div>
                            </div>
                            <p className='item-price'>{price}</p>
                        </div>
                    </div>
                            
                    <div className='items-remove'>
                        <div className='remove'></div>
                    </div>
                </div>
            </div>
        )
    }
}
