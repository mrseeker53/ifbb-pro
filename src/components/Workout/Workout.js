import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const { workout } = props;
    const { picture, name, description, time } = workout;

    return (
        <div className='workout'>
            <img src={picture} alt="" />
            <div className='workout-detail'>
                <p>{name}</p>
                <p><small>{description}</small></p>
                <p>Time: {time}s</p>
            </div>
            <button>Add to build</button>
        </div>

    );
};

export default Workout;