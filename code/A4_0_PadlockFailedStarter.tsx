//React Challenge Webinar 4.1: Animation Orchestration and Data Chart
//Video: Padlock

//STARTER

import * as React from "react"
import { Stack, Frame, useAnimation } from "framer"

import "./styles.css"

function Shackle() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="109">
            <path
                d="M 5.438 63.942 L 5.438 43.91 C 5.438 22.888 22.479 5.847 43.5 5.847 L 43.5 5.847 C 64.521 5.847 81.563 22.888 81.563 43.91 L 81.563 103.947"
                fill="transparent"
                strokeWidth="9.97"
                stroke="#fff"
                strokeLinecap="round"
            />
        </svg>
    )
}

function Body() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="99">
            <path
                d="M 0 19 C 0 8.507 8.507 0 19 0 L 82 0 C 92.493 0 101 8.507 101 19 L 101 80 C 101 90.493 92.493 99 82 99 L 19 99 C 8.507 99 0 90.493 0 80 Z"
                fill="#fff"
            />
        </svg>
    )
}

function Padlock(props) {
    return (
        <Frame background={null} {...props}>
            <Frame background={null} left={5}>
                <Shackle />
            </Frame>
            <Frame background={null} top={60}>
                <Body />
            </Frame>
        </Frame>
    )
}

export function PadlockFailedStarter() {
    const lockControls = useAnimation()
    const textControls = useAnimation()

    return (
        <Frame background={null} center>
            <Padlock animate={lockControls} left={45} />
            <Frame
                color="white"
                animate={textControls}
                background={null}
                style={{ fontSize: 30 }}
                overflow="hidden"
                width={0}
            >
                <Frame background={null} width={400}>
                    Swipe up to unlock
                </Frame>
            </Frame>
        </Frame>
    )
}
