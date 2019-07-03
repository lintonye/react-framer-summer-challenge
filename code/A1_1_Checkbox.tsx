//Webinar Week 1 Part 1

// REQUIREMENTS
// Make a checkbox that checks and unchecks on tap

// HINTS
// - Use this character inside the box: ╳
// - How do you animate the opacity of a frame? Check out this page: https://www.framer.com/api/frame/#visual

import * as React from "react"
import { Frame, useCycle } from "framer"

import "./styles.css"

export function Checkbox() {
    const [opacity, cycle] = useCycle(0, 1)
    return (
        <div>
            <Frame
                size={50}
                center
                background="#999"
                onTap={function() {
                    cycle()
                }}
            >
                <Frame size={40} center background="white">
                    <Frame
                        size={40}
                        background="transparent"
                        animate={{ opacity }}
                        transition={{ duration: 0.2 }}
                    >
                        ╳
                    </Frame>
                </Frame>
            </Frame>
        </div>
    )
}

Checkbox.defaultProps = {
    width: 50,
    height: 50,
}
