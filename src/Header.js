import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom" 
import { UseStateValue } from './StateProvider';
import { auth } from './firebase'; 

function Header() {
    const  [{basket, user}] = UseStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=" " />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>  

            <div className="header_nav">
            <Link to ={!user && '/login'}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineone">Hello, {!user?'Guest':user?.email}</span>
                    <span className="header_optionLinetwo">{user ?'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

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
                         <span className="header_optionLinetwo header_optionBasket">{basket?.length}</span>
                     </div>
                </Link>
            
            </div>

        </div>
    )
}

export default Header
