import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './MyCard.css'

const MyCard = () => {
    return (
        <div className='my-card p-3'>
            <div className='my-card-top d-flex'>
                <div className='my-card-img'>
                    <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" alt="" />
                </div>
                <div className='ms-3'>
                    <h5>Jahirul Islam</h5>
                    <div className='d-flex'>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <p className='location ms-2 mt-'><small>Sylhet, Sunamganj</small></p>
                    </div>
                </div>
            </div>

            <div className='bg-dark text-warning p-2 rounded d-flex justify-content-between'>
                <div>
                    <h2>45<sub>kg</sub></h2>
                    <p className='text-white'>Weight</p>
                </div>
                <div>
                    <h2>5.3</h2>
                    <p className='text-white'>Height</p>
                </div>
                <div>
                    <h2>23<sub>yrs</sub></h2>
                    <p className='text-white'>Age</p>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default MyCard;