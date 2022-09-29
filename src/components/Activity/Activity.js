import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';
import Workout from '../Workout/Workout';
import './Activity.css'

const Activity = () => {
    const [workouts, setWorkouts] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, []);

    const handleAddToBuild = (workout) => {
        const newTime = [...time, workout];
        setTime(newTime);
    }

    return (
        <div className='activity-container'>
            <div className="workouts-container">
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                        handleAddToBuild={handleAddToBuild}
                    ></Workout>)
                }
            </div>

            <div className="time-container">
                <Time time={time}></Time>
            </div>
        </div>
    );
};

export default Activity;