//React Challenge Webinar 4.1: Animation Orchestration and Data Chart
//1. Currency Exchange Rate Chart

// Requirements
// 1. Build an interactive bar chart that allows the user to select from and to currencies
// 2. Get the exchange rates for the past 12 months (use the monthly Forex data)
// 3. Notice when switching currencies, a loading message is displayed. This is different (and better) from what’s shown at the webinar. How would you implement that?
// 4. Feel free to style the chart and selects however you want!

// Hints
// - Example of BarChat of ReCharts: http://recharts.org/en-US/examples/TinyBarChart
// - Documentation for the data API: https://www.alphavantage.co/documentation/
// - How many times do you need to use `useState` in the `App` component?
// - Can you extract the `select` into a separate component to make the code better?
// - Sometimes the data will go blank, this is an issue from the web service. Refresh the page a few times when that happens

//SOLUTION
import * as React from "react"
import { BarChart, Bar, YAxis, XAxis } from "recharts"

import "./styles.css"

function ExchangeRateChart(props) {
    const [rawData, setRawData] = React.useState(null)

    React.useEffect(
        function() {
            async function loadData() {
                setRawData(null)
                const response = await fetch(
                    `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${
                        props.fromSymbol
                    }&to_symbol=${props.toSymbol}&apikey=FLQ5KN2TWPY5QGBP`
                )
                const data = await response.json()
                setRawData(data)
            }
            loadData()
        },
        [props.fromSymbol, props.toSymbol]
    )

    function convertToArray(data) {
        const series = data["Time Series FX (Monthly)"]
        return Object.keys(series)
            .map(function(key) {
                return {
                    open: series[key]["1. open"],
                }
            })
            .slice(0, 12)
            .reverse()
    }
    return (
        <div>
            {rawData === null ? (
                <div>Loading...</div>
            ) : (
                <BarChart
                    width={375}
                    height={375}
                    data={convertToArray(rawData)}
                >
                    <Bar
                        type="monotone"
                        dataKey="open"
                        fill="#4422ff"
                        fillOpacity={0.5}
                    />
                    <YAxis />
                    <XAxis />
                </BarChart>
            )}
        </div>
    )
}

function CurrencySelect(props) {
    return (
        <select onChange={props.onChange} value={props.value}>
            <option>USD</option>
            <option>CAD</option>
            <option>CNY</option>
            <option>EUR</option>
        </select>
    )
}

export function ExchangeRateSolution() {
    const [fromSymbol, setFromSymbol] = React.useState("USD")
    const [toSymbol, setToSymbol] = React.useState("CAD")
    return (
        <div>
            <div style={{ marginBottom: 40, marginTop: 40 }}>
                from:
                <CurrencySelect
                    value={fromSymbol}
                    onChange={function(e) {
                        const value = e.target.value
                        setFromSymbol(value)
                    }}
                />{" "}
                to:
                <CurrencySelect
                    value={toSymbol}
                    onChange={function(e) {
                        const value = e.target.value
                        setToSymbol(value)
                    }}
                />
            </div>
            <ExchangeRateChart fromSymbol={fromSymbol} toSymbol={toSymbol} />
        </div>
    )
}

ExchangeRateSolution.defaultProps = {
    width: 375,
    height: 375,
}
