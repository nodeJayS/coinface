import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Sparklines, SparklinesLine } from 'react-sparklines'

class Watchlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getWatchList = this.getWatchList.bind(this)
    }

    getAssetNames = () => {
        let assetNames = []
        for (let i = 0; i < this.props.watchlist.length; i++) {
            let currentName = this.props.watchlist[i].name
            assetNames.push(currentName)
        }
        return assetNames
    }

    getWatchList = () => {
        let assetNames = this.getAssetNames()
        let coinData = []
        for (let i = 0; i < this.props.coin.coin.length; i++) {
            let foundName = assetNames.find(name => name === this.props.coin.coin[i].id)
            if(foundName) {
                let pushData = this.props.coin.coin[i]
                coinData.push(pushData)
            }
        }
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        {coinData.map(coin => (
                            <a href={`/prices/${coin.id}`} className='col-sm-3' key={coin.id}>
                                <div className='row'>
                                    <div><Image src={coin.image} alt={coin.name} width="24" height="24"></Image></div>
                                    <div>{coin.name}</div>
                                    <div>7d</div>
                                </div>
                                <div className='row'>
                                    <div>${Number(coin['current_price']).toFixed(2).toLocaleString('en')}</div>
                                    <div className={Number(coin['price_change_percentage_7d_in_currency']) > 0 ? "greenNum" : "redNum"}>{Number(coin['price_change_percentage_24h_in_currency']).toFixed(2)}%</div>
                                </div>
                                    <div><Sparklines data={(coin['sparkline_in_7d']['price'])}><SparklinesLine style={{fill: "none"}} color="#007AFF"/></Sparklines></div>
                            </a>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    render() {
        if(this.props.watchlist && this.props.coin.coin) {
        return (
            <Container>
            <div className="watchlist-title" >Watchlist</div>
                <this.getWatchList/>
            </Container>
        )
        }
        else {
            return (<div>Watchlist is empty!</div>)
        }
    }
}

export default withRouter(Watchlist)