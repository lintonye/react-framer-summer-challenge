import * as React from "react"
import "./styles.css"

// REQUIREMENTS
// - Fork this sandbox: https://codesandbox.io/s/assignment-42-material-progress-starter-verxs
// - Build a progress indicator similar to the one below

// HINTS
// - Follow the instructions in the webinar to:
//     1. get the total length of the path
//     2. set `strokeDashoffset` and `strokeDasharray`
//     3. set an interval that repeatedly set the progress
// - Use `transform` attribute to rotate the svg, e.g.
//     <svg transform="rotate(30)">
// - Use the `transform`  function from the framer library to determine values of the `offset` and `rotate` at different progress value.
// - Study the animation closely to determine what values should be used. Download the official video of the Material progress indicator and play it frame by frame.

function Circle() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44">
            <path
                d="M 22 4 C 31.941 4 40 12.059 40 22 C 40 31.941 31.941 40 22 40 C 12.059 40 4 31.941 4 22 C 4 12.059 12.059 4 22 4 Z"
                fill="transparent"
                strokeWidth="6"
                stroke={"#119955"}
            />
        </svg>
    )
}

function ProgressIndicator() {
    return <Circle />
}

export function MaterialProgressIndicatorStarter() {
    return (
        <div>
            <div className="container">
                <ProgressIndicator />
            </div>
        </div>
    )
}

MaterialProgressIndicatorStarter.defaultProps = {
    width: 44,
    height: 44,
}
