import React from 'react'
import "./ProgressBar.css"

const max = 150


const ProgressBar = ( {label, value}) => {
    const percentage = (value/max)*100
    return (
        <div className='container_progress_bar'>
            <div className='progress_bar_info'>
                <div>
                    <p>{label}</p>
                </div>
                <div>
                    <p>{value}/{max}</p>
                </div>
            </div>
            <div className='progress_bar'>
                <div className='progress_bar_percentage' style={{width:`${percentage}%`}}/>    
            </div>
        </div>

    )
}

export default ProgressBar