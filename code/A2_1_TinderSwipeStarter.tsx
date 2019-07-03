// Webinar Week 2 Part 1

// REQUIREMENTS
// 1. When the card is only swiped a little bit, make the card bounce back to the original position
// 2. When the card is swiped far enough, make the card disappear
// 3. In case 1, the opacity of the card should be `1`; and in case 2, the opacity of the card should go from `1` to `0` gradually based on how far the card is swiped.
// 4. Bonus: add some different effects depending on which direction the card is swiped towards. For example, adding a thumb up/down accordingly, or changing the color of the card.

// HINTS
// - Use `useMotionValue` and `useTransform`
// - Use `onDragEnd` and `useAnimation`
// - in `useTransform`, the size of the input range and output range arrays can be greater than 2. For example,
//     const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
//     How would you use this to solve Requirement No. 3 above?
// - Use `if` and `else` to determine whether to dismiss the card or move it to original position. If you are not familiar with the syntax of `if else`, see this page.
// - `useTransform` works on colors too!

import * as React from "react"
import { Frame } from "framer"
import "./styles.css"

const style = {
    backgroundImage:
        "url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fbird_strong_small.svg?v=1560032432704)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundColor: "#55CCFF",
    boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.25)",
    fontFamily: "sans-serif",
    justifyContent: "flex-start",
    display: "flex",
    alignItems: "flex-end",
    padding: "16px",
    fontWeight: 700,
}

export function TinderSwipeStarter() {
    return (
        <div>
            <Frame
                center
                drag="x"
                height={300}
                style={style}
                dragConstraints={{ left: -200, right: 200 }}
                borderRadius={10}
            >
                Strong Bird
            </Frame>
        </div>
    )
}

TinderSwipeStarter.defaultProps = {
    height: 300,
}
