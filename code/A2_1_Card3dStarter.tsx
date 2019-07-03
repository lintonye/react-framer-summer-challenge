//Webinar Week 2 Part 2 Starter

// REQUIREMENTS
// 1. When not on hover, display the card normally.
// 2. When on hover, make the card slightly bigger and update its box shadow as if the card moves closer to the viewer.
// 3. When the mouse is on different parts of the card, create an effect as if the card is pressed down at where the mouse is.
// 4. For simplicity, only create two kinds of box shadows (one on hover, another when not hovered). You don’t need to adjust the box shadow according to the mouse position.

// HINTS
// - Use `onMouseMove`
// - Which event should you use to determine when the mouse is no longer on the card? Search the React doc to find out.
// - The interaction is very similar to the mouse parallax example. Use the same `cx` and `cy` values as the starting point. Can you tell why they are similar?
// - Use `perspective` attribute on a `Frame` to enable the 3D effect. Note the `perspective` attribute only affects the current element’s children. See here for more details.
// - The 3D effect is created by rotating the card around `X` and `Y` axes. The angles to be rotated depend on `cx` and `cy`. It’s tricky to figure out what values to use, but the solution uses this `rotateX: -cy  / 20, rotateY: cx / 20`. Experiment with different values to see what kind of effect you’ll get.
// - Can you use `useMotionValue` and `useTransform` to make a similar effect? (The answer is no.)

import * as React from "react"
import { Frame } from "framer"

const style = {
    backgroundImage:
        "url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fvideo-cover-new.png?v=1560060840365)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    border: "15px solid white",
    fontFamily: "sans-serif",
}

const cardWidth = 375
const cardHeight = (cardWidth * 1080) / 1920

export function Card3dStarter() {
    return (
        <Frame
            perspective={800}
            style={style}
            width={cardWidth}
            height={cardHeight}
            borderRadius={20}
        />
    )
}

Card3dStarter.defaultProps = {
    width: cardWidth,
    height: cardHeight,
}
