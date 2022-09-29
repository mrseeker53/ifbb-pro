import React, { useEffect, useState } from 'react';
import './Activity.css'

const Activity = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, []);

    return (
        <div className='activity-container'>
            <div className="workouts-container">
                {
                    workouts.map(workout => )
                }
            </div>
            <div className="time-container">
                <h4>time</h4>
            </div>
        </div>
    );
};

export default Activity;