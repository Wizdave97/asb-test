import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Speaker from '../../assets/speaker.svg'
import './index.scss'

const ModuleCard = () => {
    return (
        <div className='module-card'>
            <div className='header'>
                <span>
                    <img src={Speaker} alt='' />
                </span>
                <span>Module History</span>
            </div>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div>
                            <span>
                                Searched “Journal Entries” on Division module
                            </span>
                        </div>
                        <div>
                            <span>
                                22:10 15/09/2020 <span /> Web
                            </span>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div>
                            <span>
                                Searched “Journal Entries” on Division module
                            </span>

                        </div>
                        <div>
                            <span>
                                22:10 15/09/2020 <span /> Web
                            </span>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div>
                            <span>
                                Searched “Journal Entries” on Division module
                            </span>

                        </div>
                        <div>
                            <span>
                                22:10 15/09/2020 <span /> Web
                            </span>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default ModuleCard