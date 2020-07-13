import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class CoinChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getWeekData = this.getWeekData.bind(this)
        this.getMonthData = this.getMonthData.bind(this)
        this.createWeekChart = this.createWeekChart.bind(this)
        this.createMonthChart = this.createMonthChart.bind(this)
    }

    getWeekData = () => {
        let weekData = []
        for (let i = 0; i < this.props.weekPrices.length; i++) {
            let price = this.props.weekPrices[i][1]
            weekData.push(price)
        }
        return weekData
    }

    getMonthData = () => {
        let monthData = []
        for (let i = 0; i < this.props.monthPrices.length; i++) {
            let price = this.props.monthPrices[i][1]
            monthData.push(price)
        }
        return monthData
    }

    createWeekChart = () => {
        let chartData = this.getWeekData()
        return (
            <Sparklines data={chartData}><SparklinesLine style={{ strokeWidth: .5, fill: "none" }}/></Sparklines>
        )
    }

    createMonthChart = () => {
        let chartData = this.getMonthData()
        return (
            <Sparklines data={chartData}><SparklinesLine style={{ strokeWidth: .5, fill: "none" }}/></Sparklines>
        )
    }

    render() {
        if(this.props.weekPrices && this.props.monthPrices) {      
            return (
                <Tabs defaultActiveKey="weekly" id="coin-chart-tab">
                    <Tab eventKey="weekly" title="Weekly">
                        {this.createWeekChart()}
                    </Tab>
                    <Tab eventKey="monthly" title="Monthly">
                        {this.createMonthChart()}
                    </Tab>
                </Tabs>
            )
        }
        else {
            return (
                <>
                Loading...
                </>
            )
        }
    }
}

export default withRouter(CoinChart)
