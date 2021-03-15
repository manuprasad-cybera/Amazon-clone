import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link } from "react-router-dom" 

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineone">Hello, Sign in</span>
                    <span className="header_optionLinetwo">Account & Lists</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineone">returns</span>
                    <span className="header_optionLinetwo">& orders</span>
                </div> 
                 
                <div className="header_option">
                    <span className="header_optionLineone">your</span>
                    <span className="header_optionLinetwo">prime </span>
                    
                </div>

                <Link to ="/checkout">
                    <div className="header_optionBasket">
                         <ShoppingCartIcon />
                         <span className="header_optionLinetwo header_optionBasket">0</span>
                     </div>
                </Link>
                
            </div>

        </div>
    )
}

export default Header
