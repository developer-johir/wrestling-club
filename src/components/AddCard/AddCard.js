import React, { useEffect, useState } from 'react';
import './AddCard.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast("Finally completed");
}

const AddCard = (props) => {
    const {cart} = props;

    let total = 0;
    for(const player of cart){
        total = total + player.time;
    }

    const [brTime, setBrTime] = useState()

    useEffect( () => {
        localStorage.setItem('Time', brTime);
    }, [brTime])

    return (
        <div className='mt-4'>
            <h5>Add A Break</h5>
            <div className='bg-light text-warning p-2 rounded d-flex justify-content-between'>
                <div className='bg-white card-time'>
                <button onClick={() => setBrTime(20)} type="button" class="btn btn-white">20<sub>s</sub></button>
                </div>
                <div className='bg-white card-time'>
                <button onClick={() => setBrTime(30)} type="button" class="btn btn-white">30<sub>s</sub></button>
                </div>
                <div className='bg-white card-time'>
                <button onClick={() => setBrTime(40)} type="button" class="btn btn-white">40<sub>s</sub></button>
                </div>
                <div className='bg-white card-time'>
                <button onClick={() => setBrTime(50)} type="button" class="btn btn-white">50<sub>s</sub></button>
                </div>
                <div className='bg-white card-time'>
                <button onClick={() => setBrTime(60)} type="button" class="btn btn-white">60<sub>s</sub></button>
                </div>
            </div>

            <div className='mt-5'>
                <h5>Wrestling Details</h5>
                <div className='bg-light text-warning p-2 rounded d-flex justify-content-between align-items-center exercise'>
                    <h5>Wrestling time</h5>
                    <h6>{total} minutes</h6>
                </div>
                <div className='bg-light text-warning p-2 rounded d-flex justify-content-between align-items-center exercise mt-3'>
                    <h5>Break time</h5>
                    <h6>{brTime} seconds</h6>
                </div>
            </div>

            <div>
            <button onClick={notify} type="button" class="btn btn-danger w-100 text-white fw-bold mt-5">Activity Completed</button>
            <ToastContainer/>
            </div>
        </div>
    );
};

export default AddCard;