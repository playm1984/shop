import React, { Component } from 'react'

import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import './main-page.css'

class MainPage extends Component {
    
    render() {
        const {shoes} = this.props;
        console.log(shoes)

        return (
            <div className="mainPage">
                <div className='mainPage_inner'>

                    <p className='category-p'>Категории</p>

                        <div className='map-item'>

                            {shoes.map(item => {
                                    return(
                                        <div key={item.id} className='itemShoes'>
                                            <img src={item.img} alt='shoes' className='shoesImg'/>
                                            <h2 className='titleShoes'>{item.title}</h2>
                                            <div className='shoesLink'>
                                                <Link to={'/pants'} className='link' href='#'>{item.sort_1}</Link>
                                                <Link to={'/outerwear'} className='link' href='#'>{item.sort_2}</Link>
                                                <Link to={'/jacket'} className='link' href='#'>{item.sort_3}</Link>
                                                <Link to={'/other'} className='link' href='#'>...</Link>
                                            </div>
                                        </div>
                                    )
                                })}
                                
                        </div>
                            
                </div>  
            </div>
        )
    }
}

const mapStateToProps = ({shoes}) => {
    return{
        shoes
    }
}

export default connect (mapStateToProps)(MainPage)
