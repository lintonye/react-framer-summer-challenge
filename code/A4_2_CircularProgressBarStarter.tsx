import * as React from "react"
import { useRef, useState, useEffect } from "react"
import { Frame } from "framer"
import "./styles.css"

const screenWidth = 375
const screenHeight = 812

function CircularProgress({ progress }) {
    return (
        <Frame size={260} background={null} center>
            <Frame
                center
                color="green"
                size="auto"
                top={140}
                background={null}
                style={{ fontSize: 120 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="140.66"
                    height="100.11"
                >
                    <path
                        d="M 46.477 100.11 L 0 53.633 L 5.931 47.703 L 46.477 88.249 L 134.729 0 L 140.66 5.93 Z"
                        fill="#119955"
                    />
                </svg>
            </Frame>

            <svg xmlns="http://www.w3.org/2000/svg" width="260" height="260">
                <path
                    d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
                    fill="transparent"
                    strokeWidth="8"
                    stroke={"#119955"}
                />
            </svg>
        </Frame>
    )
}

export function CircularProgressBarStarter() {
    return (
        <div>
            <div className="container">
                <CircularProgress progress={0} />
            </div>
        </div>
    )
}

CircularProgressBarStarter.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
