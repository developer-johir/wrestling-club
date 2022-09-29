import React from 'react';
import './Wrestling.css'

const Wrestling = (props) => {
    const {name, info, age, time, img} = props.player;
    return (
        <div className=''>
            <div className="card h-100 wrestling">
                <div className="card-body">
                <img src={img} class="card-img-top" alt=""/>
                    <h5 className="card-title mt-3">{name}</h5>
                    <p className="card-text"><small>{info}</small></p>
                    <p>Age: <b>{age}</b></p>
                    <p>Time required: <b>{time}m</b></p>

                    <button onClick={() => props.handleAddToTime(props.player)} type="button" class="btn btn-danger w-100 text-white">Add to list</button>
                    
                </div>
            </div>

        </div>
    );
};

export default Wrestling;