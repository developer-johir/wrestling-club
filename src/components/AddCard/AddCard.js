import React from 'react';
import './AddCard.css'

const AddCard = (props) => {
    return (
        <div className='mt-4'>
            <h5>Add A Break</h5>
            <div className='bg-light text-warning p-2 rounded d-flex justify-content-between'>
                <div className='bg-white card-time'>
                    <a href="/me">20<sub>s</sub></a>
                </div>
                <div className='bg-white card-time'>
                    <a href="/me">30<sub>s</sub></a>
                </div>
                <div className='bg-white card-time'>
                    <a href="/me">40<sub>s</sub></a>
                </div>
                <div className='bg-white card-time'>
                    <a href="/me">50<sub>s</sub></a>
                </div>
                <div className='bg-white card-time'>
                    <a href="/me">60<sub>s</sub></a>
                </div>
            </div>

            <div className='mt-5'>
                <h5>Exercise Details</h5>
                <div className='bg-light text-warning p-2 rounded d-flex justify-content-between align-items-center exercise'>
                    <h5>Exercise time</h5>
                    <h6>00 minutes</h6>
                </div>
                <div className='bg-light text-warning p-2 rounded d-flex justify-content-between align-items-center exercise mt-3'>
                    <h5>Break time</h5>
                    <h6>00 seconds</h6>
                </div>
            </div>

            <div>
            <button type="button" class="btn btn-danger w-100 text-white fw-bold mt-5">Activity Completed</button>
            </div>
        </div>
    );
};

export default AddCard;