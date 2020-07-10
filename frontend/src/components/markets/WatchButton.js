import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WatchButton extends Component {
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
            name: this.props.coin.coin[0].id
        }
        let wl = this.props.watchlist
        let userAsset = wl.find(asset => asset.name === this.props.match.params.coinid)
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
        let exist = this.props.watchlist.find(asset => asset.name === this.props.match.params.coinid)
        if (!exist) {
            return (<><FontAwesomeIcon icon="star" color="white" /> Add to Watchlist</>)
        }
        else {
            return (<><FontAwesomeIcon icon="star" color="yellow" /> Watchlist</>)
        }
    }

    render() {
        if(this.props.watchlist && this.props.coin) {
        return (
            <Container>
                <Button onClick={this.updateWatchList}>{this.getStar()}</Button>
            </Container>
        )
        }
        else {
            return (<div>Loading...</div>)
        }
    }
}

export default withRouter(WatchButton)