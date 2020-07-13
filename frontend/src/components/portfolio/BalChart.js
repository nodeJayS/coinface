import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines'

class BalChart extends Component {
    constructor(props) {
        super(props);
    }

    createChart = () => {
        
    }

    render() {
        if(this.props.assets && this.props.usd) {      
            return (
                <>
                </>
            )
        }
        else {
            return (
                <>
                </>
            )
        }
    }
}

export default withRouter(BalChart)
