import React from 'react';
import './Time.css'

const Time = () => {
    return (
        <div className='time-calculate'>
            <div className='info'>
                <h3>Mr Seeker</h3>
                <p>Zagreb, Croatia</p>
            </div>
            <div className='rest'>
                <h4>Rest</h4>
                <button>15s</button>
                <button>30s</button>
                <button>45s</button>
                <button>60s</button>
            </div>
            <div className='workout-details'>
                <h4>Workout Details</h4>
                <p>Workout Time:  { }</p>
                <p>Rest Time: </p>
            </div>
            <button className='btn-workout'>Workout Completed</button>
        </div>
    );
};

export default Time;