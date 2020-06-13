import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default function CoinDataTable(props) {  
      const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        getCoin();
    },[])
    
    const getCoin = async () => {
        let coinURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h,7d'
        let coinNum = 1; 
    
        // If specific parameters for coins are declared
        if (props.coinIds) {
            const coinIds = `&ids=` + props.coinIds
            coinURL += coinIds
            console.log(coinURL)
        }

        const response = await axios
            .get(coinURL)
            setCoinData(response.data.map(coin =>
            <tr key={coin.id}>
                <td>{coinNum++}</td>
                <td><Image src={coin.image} alt={coin.name} width="24" height="24"></Image></td>
                <td>{coin.name} - {coin.symbol.toUpperCase()}</td>
                <td>${Number(coin['current_price']).toFixed(2).toLocaleString('en')}</td>
                <td>${coin['market_cap'].toLocaleString('en')}</td>
                <td>{(coin['price_change_percentage_24h_in_currency']).toFixed(2)}%</td>
                <td>{(coin['price_change_percentage_7d_in_currency']).toFixed(2)}%</td>
                <td width="48" height="36"><Sparklines data={(coin['sparkline_in_7d']['price'])}><SparklinesLine/></Sparklines></td>
            </tr>
            ))
    };

    return (
    <>
        <Table className="HomeTable" responsive striped borderless size="sm" width="100">
            
            <thead>               
                <th>#</th>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Marketcap</th>
                <th>Change in 24 hrs</th>
                <th>Change in 7 days</th>
                <th></th>
            </thead>
            <tbody>
                {coinData}
            </tbody>
        </Table>
    </>
    )
};
