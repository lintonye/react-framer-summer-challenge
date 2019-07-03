import * as React from "react"
import { Frame, useCycle } from "framer"

import { Card, Description } from "./canvas"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function ExpandableCard(props) {
    console.log(props)
    const [mode, cycleMode] = useCycle("list", "detail")
    const { width } = props
    const { parentPosition = { left: 0, top: 0 } } = props
    const left = parentPosition.left
    const top = parentPosition.top
    return (
        <Frame
            animate={mode}
            initial={mode}
            background="transparent"
            size="100%"
            variants={{
                list: { x: 0, y: 0, width },
                detail: { x: -left, y: -top, width: 375 },
            }}
        >
            <Card
                size="100%"
                variants={{
                    list: { borderRadius: 17 },
                    detail: {
                        borderRadius: 0,
                    },
                }}
                onTap={function() {
                    cycleMode()
                }}
            />
            <Description
                top={402}
                size="100%"
                variants={{
                    list: { height: 0 },
                    detail: { height: 447 },
                }}
            />
        </Frame>
    )
}

ExpandableCard.defaultProps = {
    width: 315,
    height: 403,
}
