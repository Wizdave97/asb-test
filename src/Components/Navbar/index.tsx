import React from 'react'
import './index.scss'
import Logo from '../../assets/fe-logo.svg'
import Home from '../../assets/home.svg'
import Entries from '../../assets/entries.svg'
import Division from '../../assets/divisions.svg'
import Search from '../../assets/search.svg'
import Bell from '../../assets/bell.svg'
import Person from '../../assets/person.svg'
import CaretDowm from '../../assets/caret_down.svg'

const Navbar = () => {
    return (<div className='navbar'>
        <section className='left-section'>
            <div className='logo-container'>
                <img src={Logo} alt='' />
                <span>FE Engineer Test 1</span>
            </div>
            <div className='nav-items'>
                <div className='nav-item'>
                    <img src={Home} alt='' />
                    <span>Home</span>
                </div>
                <div className='nav-item'>
                    <img src={Entries} alt='' />
                    <span>Entries</span>
                </div>
                <div className='nav-item active'>
                    <img src={Division} alt='' />
                    <span>Division</span>
                </div>
            </div>
        </section>
        <section className='right-section'>
            <div className='search-container'>
                <div className='input'>
                    <img src={Search} alt=''/>
                    <input type="text" />
                </div>
            </div>
            <div className='bell'>
                <img src={Bell} alt=''/>
            </div>
            <div className='person'>
                <img src={Person} alt=''/>
            </div>
            <div className='caret'>
                <img src={CaretDowm}  alt=''/>
            </div>
        </section>
    </div>)
}

export default Navbar