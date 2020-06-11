import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Table() {  

    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        getCoin();
    }, []);
    
    const getCoin = async () => {
        const response = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=e85804af64bfbeca246e5e053e7a446c&interval=1d,30d&convert=USD&ids=BTC,ETH,XRP`);
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
