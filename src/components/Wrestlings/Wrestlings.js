import React, { useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';
import Wrestling from '../Wrestling/Wrestling';
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
                    <div className="col-12 col-md-8 col-lg-9 p-5 bg-light wrestlings">
                        {
                            players.map(player => <Wrestling player={player}></Wrestling>)
                         }
                    </div>


                    <div className="col-12 col-md-4 col-lg-3 my-card-info">
                        <MyCard></MyCard>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Wrestlings;