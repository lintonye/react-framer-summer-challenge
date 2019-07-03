import * as React from "react"
import { Frame, useCycle } from "framer"

import "./styles.css"

export function Toggle() {
    const result = useCycle(0, 60)
    const x = result[0]
    const cycle = result[1]
    return (
        <div>
            <Frame
                width={120}
                height={60}
                borderRadius={30}
                onTap={function handleTap() {
                    console.log("tapped!")
                    cycle()
                }}
            >
                <Frame
                    size={60}
                    borderRadius={30}
                    animate={{ x: x }}
                    transition={{ duration: 0.2 }}
                />
            </Frame>
        </div>
    )
}

Toggle.defaultProps = {
    width: 120,
    height: 60,
}
