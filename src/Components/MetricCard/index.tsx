import { gql, useQuery } from '@apollo/client'
import React from 'react'
import './index.scss'

const GET_METRICS = gql`
    query GetMetrics  {
        allMetrics {
            id,
            title,
            value
        }
    }
`
const MetricCard = ({value, title}: any) => {
    return (
        <div className='metric-card'>
            <div className='metric'>
                <span>{value}</span>
                <span></span>
            </div>

            <span className='sub'>{title}</span>
        </div>
    )
}

const Metrics = () => {
    const {data, loading, error} = useQuery(GET_METRICS)
    if(loading) return <div className='loading'></div>
    if(error) return null

    return (
        <>
            {data.allMetrics.map((metric: any) => <MetricCard value={metric.value} title={metric.title} key={metric.id}/>)}
        </>
    )
}
export default Metrics