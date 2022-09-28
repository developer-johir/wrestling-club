import React, { useEffect, useState } from 'react';
import './Wrestlings.css'

const Wrestlings = () => {

    const [players, setPlayers] = useState([])

    useEffect( () => {
        fetch('wrestling.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <div className='wrestlings-container'>

            <div className="">
                <div className="row align-items-start">
                    <div className="col-12 col-md-8 col-lg-9 px-5 bg-light">
                        <h1>Wrestling left: {players.length}</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                                </div>
                            </div>
                            {/* <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                                </div>
                            </div> */}
                            </div>
                    </div>


                    <div className="col-12 col-md-4 col-lg-3">
                        <h1>Wrestling Right</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Wrestlings;