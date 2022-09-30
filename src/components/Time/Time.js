import React, { useEffect, useState } from 'react';
import { addToDb, displayToUi } from '../../utilities/fakedb';
import './Time.css'

const Time = ({ time }) => {
    const [rest, setRest] = useState(0)

    // workout time
    let workoutTime = 0;
    for (const workout of time) {
        workoutTime = workoutTime + workout.time;
    }

    // load data from local storage
    useEffect(() => {
        const previousRest = displayToUi();
        setRest(previousRest);
    }, [])

    const handleRestTime = (rest) => {
        setRest(rest);
        addToDb(rest);
    }


    return (
        <div className='time-calculate'>
            <div className='info'>
                <h3>Mr Seeker</h3>
                <p>Zagreb, Croatia</p>
            </div>
            <div className='rest'>
                <h4>Rest</h4>
                <button onClick={() => handleRestTime(15)}>15s</button>
                <button onClick={() => handleRestTime(30)}>30s</button>
                <button onClick={() => handleRestTime(45)}>45s</button>
                <button onClick={() => handleRestTime(60)}>60s</button>
            </div>
            <div className='workout-details'>
                <h4>Workout Details</h4>
                <p>Workout Time: {workoutTime} seconds</p>
                <p>Rest Time: {rest} seconds</p>
            </div>
            <button className='btn-workout'>Workout Completed</button>
        </div >
    );
};

export default Time;