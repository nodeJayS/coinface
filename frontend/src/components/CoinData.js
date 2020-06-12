import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import * as nomicsKey from '../config/Keys';
import * as top4Coins from '../config/Coins';

export default function CoinData() {  

    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        getCoin();
    },[])
    
    const getCoin = async () => {
        const response = await axios
            .get(`https://api.nomics.com/v1/currencies/ticker?key=${nomicsKey.nomicsKey}&interval=1d,30d&convert=USD&ids=${top4Coins.top4Coins}`)
            setCoinData(response.data.map(coin => 
            <tr key={coin.id}>
                <Image src={coin.logo_url} alt={coin.name} width="36" height="36"></Image>
                <td >{coin.symbol}</td>
                <td>{coin.name}</td>
                <td>${Number(coin.price).toFixed(2)}</td>
                <td>{(coin['1d']['price_change_pct']*100).toFixed(2)}%</td>
            </tr>
        ))
    };



    return (
    <>
        <Table className="HomeTable" responsive striped borderless size="sm" width="100">
                {coinData}
        </Table>
    </>
    )
};
