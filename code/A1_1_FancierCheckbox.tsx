//Webinar Week 1 Part 1

// REQUIREMENTS
// A checkbox with an animation

// HINTS
// useCycle can be used multiple times

import * as React from "react"
import { Frame, useCycle } from "framer"

export function FancierCheckbox() {
    const [unchecked, checked] = useCycle(
        { opacity: 0, rotate: 0 },
        { opacity: 1, rotate: 90 }
    )

    return (
        <Frame
            width={40}
            height={40}
            border="2px solid #000"
            backgroundColor={"transparent"}
        >
            <Frame
                size={"100%"}
                backgroundColor={"transparent"}
                onTap={() => checked()}
                animate={unchecked}
                transition={{ duration: 0.2 }}
                style={{ fontSize: 28 }}
            >
                ╳
            </Frame>
        </Frame>
    )
}

FancierCheckbox.defaultProps = {
    width: 40,
    height: 40,
}
