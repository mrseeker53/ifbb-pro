import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const { workout, handleAddToBuild } = props;
    const { picture, name, description, time } = workout;

    return (
        <div className='workout'>
            <img src={picture} alt="" />
            <div className='workout-detail'>
                <p className='workout-name'>{name}</p>
                <p><small>{description}</small></p>
                <p>Time: {time}s</p>
            </div>
            <button onClick={() => handleAddToBuild(workout)} className='btn-build'>Add to build</button>
        </div>

    );
};

export default Workout;