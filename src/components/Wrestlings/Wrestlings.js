import React, { useEffect, useState } from 'react';
import AddCard from '../AddCard/AddCard';
import MyCard from '../MyCard/MyCard';
import Wrestling from '../Wrestling/Wrestling';
import './Wrestlings.css'

const Wrestlings = () => {

    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('wrestling.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    const handleAddToTime = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className='wrestlings-container'>

            <div className="">
                <div className="row align-items-start">
                    <div className="col-12 col-md-8 col-lg-9 p-5 bg-light wrestlings">
                        {
                            players.map(player => <Wrestling 
                                key={player.id} 
                                player={player}
                                handleAddToTime={handleAddToTime}
                                ></Wrestling>)
                         }
                    </div>


                    <div className="col-12 col-md-4 col-lg-3 my-card-info">
                        <MyCard></MyCard>
                        <AddCard cart={cart}></AddCard>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Wrestlings;