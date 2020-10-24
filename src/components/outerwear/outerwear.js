import React, { Component } from 'react'

import OuterWearItem from '../outerwear-item'

import {connect} from 'react-redux'
import {countItemPlus, countItemMinus} from '../../redux/action'

import './outerwear.css'

class OuterWear extends Component {
    render() {

        const {outerwear, countItemPlus, countItemMinus} = this.props;

        return (
            <div className='outer-wear'>
                <p className='bredcrumds'>Hello</p> 

                <div className='outer-wear-main'>

                    {
                        outerwear.map(item => {
                            const {id} = item;
                            return(
                                <OuterWearItem key={id}
                                    item={item}
                                    countItemPlus = {() => countItemPlus(id)}
                                    countItemMinus = {() => countItemMinus(id)}
                                />
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}


const mapStateToProps = ({outerwear}) => {
    return{
        outerwear
    }
}

const mapDispatchToProps = {
    countItemPlus, countItemMinus
}

export default connect (mapStateToProps, mapDispatchToProps)(OuterWear)