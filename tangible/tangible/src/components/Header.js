import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
import {Link} from 'react-router-dom'
import{useState, useEffect} from 'react'; 



const Header = ({ setAccount }) => {

        

    async function loginButton() {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {accountChangeHandler(result[0])})
    }

    const accountChangeHandler = (newAccount) => {
        if (newAccount == '') {
            localStorage.setItem('account', 0)
        } else {
            localStorage.setItem('account', newAccount)
        }
        window.location.reload()
    }

    function isConnected() {
        if (localStorage.getItem('account') == 0) {
            return false;
        } else {
            return true;
        }
    }

    window.ethereum.on('accountsChanged', accountChangeHandler)

    

    return (
        <div className='header'>
             <div className='logoContainer'>
                 <img src={punkLogo} className='punkLogo' alt='' />
             </div>

             <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>
                <input className='searchInput' placeholder='Collection, item, or user ...'/>
            </div>

            <div className='headerItems'>
				<Link className="marketPlace" to="/">Marketplace</Link>
                <Link className="drops" to="/">Drops</Link>
                <Link className="about" to="/">About</Link>
            </div>

            <div  className='headerActions'>
                <div className='themeSwitchContainer'  style={{backgroundColor: isConnected() ? '#59f9b7' : '#1c1c1e'}}>
                    <img src={themeSwitchIcon} />
                </div>
            </div>

            <button className='loginButton' onClick={loginButton}>
                Get in
            </button>

        </div>
        
    )
}

export default Header
