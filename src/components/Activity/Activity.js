import React, { useEffect, useState } from 'react';
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
        console.log(workout)
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
                <h4>Workout Details</h4>
                <p>Workout Time: {time.time}</p>
                <p>Rest: </p>
            </div>
        </div>
    );
};

export default Activity;