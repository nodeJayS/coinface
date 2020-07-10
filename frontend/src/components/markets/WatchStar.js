import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WatchStar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchStar: false
        }
        this.updateWatchList = this.updateWatchList.bind(this)
        this.getStar = this.getStar.bind(this)
    }

    updateWatchList = (e) => {
        e.preventDefault();
        let coin = {
            userid: this.props.user.id,
            name: this.props.coinid
        }
        let wl = this.props.watchlist
        let userAsset = wl.find(asset => asset.name === this.props.coinid)
            if (userAsset) {
                console.log('removing from wl')
                this.props.removeWL(coin)
                this.setState({
                    watchStar: false
                })
            }
            else {
                console.log('adding to wl')
                this.props.updateWL(coin)
                this.setState({
                    watchStar: true
                })
            }
    }

    getStar = () => {
        let exist = this.props.watchlist.find(asset => asset.name === this.props.coinid)
        if (!exist) {
            return (<FontAwesomeIcon size="lg" onClick={this.updateWatchList} icon="star" color="white" />)
        }
        else {
            return (<FontAwesomeIcon size="lg" onClick={this.updateWatchList} icon="star" color="yellow" />)
        }
    }

    render() {
        if(this.props.watchlist && this.props.coinid) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>{this.getStar()}</div>
        )
        }
        else {
            return (<Container>Loading...</Container>)
        }
    }
}

export default withRouter(WatchStar)