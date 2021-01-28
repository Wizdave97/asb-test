import React from 'react'
import { RISK_PROFILE } from '.'
import LOWRISK from '../../assets/green_arrow.svg'
import MIDRISK from '../../assets/purple_arrow.svg'
import HIGHRISK from '../../assets/red_arrow.svg'


export const NameCell = ({name}: any) => {
    return (
        <div className='name-cell'>
            <span>{name}</span>
            <span/>
        </div>
    )
}
export const LocationCell = ({state, address}: any) => {
    return (
        <div className='location-cell'>
            <span>{state}</span>
            <span>{address}</span>
        </div>
    )
}

export const IssuesCell = ({issues}: any) => {
    return (
        <div className='issues-cell'>
            <span className={issues <=0 ? 'no-issues' : ''}>{issues} issues</span>
        </div>
    )
}

export const EntriesCell = ({ entries }: any) => {
    return (
        <div className='entries-cell'>
            <span><span />{entries} Lagos State</span>
            <span>Homogenous</span>
        </div>
    )
}

export const RiskCell = ({ risk }: any) => {
    return (
        <div className='risk-cell'>
            {risk === RISK_PROFILE.LOW_RISK && <span className='low-risk'><img src={LOWRISK}  alt=''/> Low Risk</span>}
            {risk === RISK_PROFILE.MID_RISK && <span className='mid-risk'> <img src={MIDRISK} alt='' /> Mid Risk</span>}
            {risk === RISK_PROFILE.HIGH_RISK && <span className='high-risk'><img src={HIGHRISK} alt='' /> High Risk</span>}
        </div>
    )
}