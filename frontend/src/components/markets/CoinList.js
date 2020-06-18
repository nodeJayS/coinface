import React from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default function CoinList({coinData}) {
    let coinNum = 1;
    return (
        <Table responsive striped borderless size="sm" width="100">
            <thead>
                <tr>               
                <th>#</th>
                <th></th>
                <th>Name</th>
                <th>Prices</th>
                <th>Marketcap</th>
                <th>Change in 24 hrs</th>
                <th>Change in 7 days</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {coinData && coinData.map(coin =>
                <tr key={coin.id}>
                    <td>{coinNum++}</td>
                    <td><Image src={coin.image} alt={coin.name} width="24" height="24"></Image></td>
                    <td>{coin.name} - {coin.symbol.toUpperCase()}</td>
                    <td>${Number(coin['current_price']).toFixed(2).toLocaleString('en')}</td>
                    <td>${coin['market_cap'].toLocaleString('en')}</td>
                    <td>{Number(coin['price_change_percentage_24h_in_currency']).toFixed(2)}%</td>
                    <td>{Number(coin['price_change_percentage_7d_in_currency']).toFixed(2)}%</td>
                    <td width="48" height="36"><Sparklines data={(coin['sparkline_in_7d']['price'])}><SparklinesLine/></Sparklines></td>
                </tr>)
                }
            </tbody>
        </Table>
    )
}
