//React Challenge Webinar 4.1: Animation Orchestration and Data Chart
//Video: StockCharts

import * as React from "react"
import { LineChart, Line, YAxis, XAxis } from "recharts"
// import * as rawData from "./tsla.json"

import "./styles.css"

function StockChart(props) {
    // rawData ===> [{ open: 271 }, { open: 239 }, { open: 129 }]

    // const rawData = downloadData()
    const [rawData, setRawData] = React.useState(null)

    console.log(props)

    React.useEffect(
        function() {
            async function loadData() {
                const response = await fetch(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${
                        props.symbol
                    }&apikey=FLQ5KN2TWPY5QGBP`
                )
                const data = await response.json()
                console.log("download")
                setRawData(data)
            }
            loadData()
        },
        [props.symbol]
    )

    function convertToArray(data) {
        const series = data["Weekly Time Series"]
        return Object.keys(series)
            .map(function(key) {
                return {
                    open: series[key]["1. open"],
                }
            })
            .slice(0, 20)
            .reverse()
    }
    return (
        <div>
            {rawData === null ? (
                <div>Loading...</div>
            ) : (
                <LineChart
                    width={375}
                    height={400}
                    data={convertToArray(rawData)}
                >
                    <Line
                        type="monotone"
                        dataKey="open"
                        stroke="#8884d8"
                        strokeWidth={3}
                    />
                    <YAxis />
                    <XAxis />
                </LineChart>
            )}
        </div>
    )
}

export function StockChartFinished() {
    const [symbol, setSymbol] = React.useState("tsla")
    return (
        <div className="App">
            <select
                onChange={function(e) {
                    const value = e.target.value
                    setSymbol(value)
                }}
            >
                <option>tsla</option>
                <option>aapl</option>
                <option>amzn</option>
            </select>
            <StockChart symbol={symbol} />
        </div>
    )
}
