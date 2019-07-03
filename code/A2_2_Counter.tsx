// Counter Solution provided by Linton

// TASK
// Make a simple counter like this https://www.dropbox.com/s/bsp9ngfop5ynkuf/assignment-2.2.1-counter.gif?raw=

import * as React from "react"
import "./styles.css"

export function CounterSolution() {
    const buttonStyle = {
        fontSize: 20,
        backgroundColor: "purple",
        color: "white",
        margin: 5,
        padding: 10,
        borderRadius: 5,
    }
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button
                style={buttonStyle}
                onClick={function() {
                    setCount(count + 1)
                }}
            >
                +1
            </button>
            <button
                style={buttonStyle}
                onClick={function() {
                    setCount(count - 1)
                }}
            >
                -1
            </button>
        </div>
    )
}
