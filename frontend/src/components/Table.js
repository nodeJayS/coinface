import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Table() {  

    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        getCoin();
    }, []);
    
    const getCoin = async () => {
        const response = await axios.get(``);
        setCoinData(response.data.map(coin => 
            // <li>{coin.name}</li>
            <div key={coin.id}>
                <div>
                    {coin.name}
                </div>
                <div>
                    {coin.price}
                </div>
            </div>
        ))
    };

    return (
        <ul>
        {coinData}
        </ul>
    )
}
