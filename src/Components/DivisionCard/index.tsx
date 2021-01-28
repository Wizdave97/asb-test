import React from 'react'
import Phone from '../../assets/phone.svg'
import Location from '../../assets/location.svg'
import Castle from '../../assets/castle.svg'
import Envelope from '../../assets/envelope.svg'
import Journal from '../../assets/journal.svg'
import FingerPrint from '../../assets/fingerprint.svg'
import './index.scss'

const DivisionCard  = () => {
    return (
        <div className='division-card'>
            <div className='header'>
                <span>
                    <img src={Castle} alt=''/>
                </span>
                <span>Division Summary</span>
            </div>
            <div className='item'>
                <span><img src={Phone} alt=''/></span>
                <span>0801 234 5678</span>
            </div>
            <div className='item'>
                <span><img src={Envelope} alt=''/></span>
                <span>asbfefr@gmail.com</span>
            </div>
            <div className='item'>
                <span><img src={Location} alt=''/></span>
                <span>Mojidi, Lagos</span>
            </div>
            <div className='item'>
                <span><img src={Journal} alt=''/></span>
                <span>2 Journal entries</span>
            </div>
            <div className='item'>
                <span><img src={FingerPrint} alt=''/></span>
                <span>24 fingerprints enrolled</span>
            </div>
        </div>
    )
}

export default DivisionCard