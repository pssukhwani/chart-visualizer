import React from 'react'
import GraphData from "./graphData";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";


class GameData extends GraphData {
    constructor(props) {
        super(props);
        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                title: {
                    text: props.location.state.data
                },
                xAxis: {
                    title: {
                        text: 'DATE'
                    },
                    categories: this.getLocalStorageData()[0],
                },
                yAxis: {
                    title: {
                        text: 'REVENUE'
                    },
                    categories: this.getLocalStorageData()[6]
                },
                series: this.getLocalStorageData()[4],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                mouseOver: this.setHoverData.bind(this)
                            }
                        }
                    }
                }
            },
            hoverData: null
        };
    }

    render() {
        const {chartOptions} = this.state;
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
                <button className='btn btn-primary' onClick={this.gameRevenueSeries.bind(this)}>Revenue Data
                </button>
                <br/><br/>
                <button className='btn btn-primary' onClick={this.gameDauSeries.bind(this)}>DAU Data</button>
            </div>
        )
    }
}

export default GameData
