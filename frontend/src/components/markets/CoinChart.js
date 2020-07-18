import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class CoinChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getDailyData = this.getDailyData.bind(this)
        this.getWeekData = this.getWeekData.bind(this)
        this.getMonthData = this.getMonthData.bind(this)
        this.createWeekChart = this.createWeekChart.bind(this)
        this.createMonthChart = this.createMonthChart.bind(this)
    }

    getDailyData = () => {
        let dailyData = []
        for (let i = 0; i < this.props.dailyPrices.length; i++) {
            let price = this.props.dailyPrices[i][1]
            dailyData.push(price)
        }
        return dailyData
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

    createDailyChart = () => {
        let chartData = this.getDailyData()
        return (
            <div className='container'>
                <div className='priceCont row'>
                    <div className='currentPrice'>$ {this.props.coin[0]['current_price'].toFixed(2)}</div>
                    <div className='currentPercent'>
                        <div className={this.props.coin[0]['price_change_percentage_24h'] > 0 ? "greenNum" : "redNum"}>{this.props.coin[0]['price_change_percentage_24h'].toFixed(2)} %</div>
                    </div>
                </div>
            <Sparklines data={chartData}><SparklinesLine color='#1652F0' style={{ strokeWidth: .5, fill: "none" }}/></Sparklines>
            </div>
        )
    }

    createWeekChart = () => {
        let chartData = this.getWeekData()
        return (
            <div className='container'>
                <div className='priceCont row'>
                    <div className='currentPrice'>$ {this.props.coin[0]['current_price'].toFixed(2)}</div>
                </div>
                <Sparklines data={chartData}><SparklinesLine color='#1652F0' style={{ strokeWidth: .5, fill: "none" }}/></Sparklines>
            </div>
        )
    }

    createMonthChart = () => {
        let chartData = this.getMonthData()
        return (
            <div className='container'>
                <div className='priceCont row'>
                    <div className='currentPrice'>$ {this.props.coin[0]['current_price'].toFixed(2)}</div>
                </div>
                <Sparklines data={chartData}><SparklinesLine color='#1652F0' style={{ strokeWidth: .5, fill: "none"}}/></Sparklines>
            </div>
        )
    }

    render() {
        if(this.props.coin && this.props.dailyPrices && this.props.weekPrices && this.props.monthPrices) {      
            return (
                <div className='container coinChart'>
                <Tabs defaultActiveKey="daily" id="coin-chart-tab">
                    <Tab eventKey="daily" title="Daily">
                        {this.createDailyChart()}
                    </Tab>
                    <Tab eventKey="weekly" title="Weekly">
                        {this.createWeekChart()}
                    </Tab>
                    <Tab eventKey="monthly" title="Monthly">
                        {this.createMonthChart()}
                    </Tab>
                </Tabs>
                </div>
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
