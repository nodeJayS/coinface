import React, { Component } from 'react'
import CoinGeckoLogo from '../../../images/CoinGeckoLogo.png'

export default class Markets extends Component {
    render() {
    let coinGeckoLink = <a className='siteLink' href='https://www.coingecko.com/en/api'>CoinGecko</a>
    let axiosLink = <a className='siteLink' href='https://github.com/axios/axios'>here</a>
        return (
            <div className='container'>
                <div className='descWrapper'>
                <div className='descHeader'>
                    Where is the market data coming from?
                </div>
                <div className='descBody'>
                    All coin related data is pulled from {coinGeckoLink}'s market API. 
                    However, I am NOT in any sort of partnership with CoinGecko.
                    I am just using their awesome API provided for free to power the data you see in Coinface's charts.
                    Some of the information used in my project includes the coin's live price, tickers and volume!
                    I use Axios, a promise-based HHTP client to send requests to this API and lets me receive this data to use in Coinface.
                </div>
                <div className='axiosBody'>
                    I use Axios, a promise-based HTTP client to send requests to CoinGecko's API and receive this data to use in Coinface.
                    Click {axiosLink} to check out the official Axios github.
                </div>
                </div>
                <div className='logoWrapper'>
                <a href='https://www.coingecko.com/en/api'>               
                    <img className='coinGeckoLogo' src={CoinGeckoLogo} alt='CoinGeckoLink' width='50%'></img>
                </a>
                </div>
            </div>
        )
    }
}
