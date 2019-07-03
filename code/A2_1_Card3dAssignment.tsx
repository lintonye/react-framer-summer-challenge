//Webinar Week 2 Part 2 Assignment

// REQUIREMENTS
// 1. When not on hover, display the card normally.
// 2. When on hover, make the card slightly bigger and update its box shadow as if the card moves closer to the viewer.
// 3. When the mouse is on different parts of the card, create an effect as if the card is pressed down at where the mouse is.
// 4. For simplicity, only create two kinds of box shadows (one on hover, another when not hovered). You don’t need to adjust the box shadow according to the mouse position.

import * as React from "react"
import { Frame, useAnimation, useMotionValue, useTransform } from "framer"

const cardWidth = 375
const cardHeight = (cardWidth * 1080) / 1920

export function Card3dAssignment() {
    const normalShadow = "0px 10px 30px -5px rgba(0, 0, 0, 0.3)"
    const liftShadow = "0px 30px 30px -5px rgba(0, 0, 0, 0.3)"
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
    const animation = useAnimation()
    const variants = {
        initial: { rotateX: 0, rotateY: 0, scale: 1, boxShadow: normalShadow },
        hover: { scale: 1.1, boxShadow: liftShadow },
    }
    function onMouseMove(e) {
        const { clientX, clientY } = e

        const cx = (clientX - window.innerWidth / 2) / 20
        const cy = -(clientY - window.innerHeight / 2) / 20
        animation.start("hover")
        animation.start({
            rotateX: cy,
            rotateY: cx,
        })
    }
    function onMouseLeave() {
        animation.start("initial")
    }
    function onPan(event, info) {
        console.log(info.delta)
    }
    function onPanEnd(event, info) {
        console.log(info.delta)
    }

    return (
        <Frame
            perspective={800}
            center
            width={0.8 * cardWidth}
            height={0.8 * cardHeight}
            background="transparent"
        >
            <Frame
                style={style}
                animate={animation}
                center
                size={"100%"}
                borderRadius={20}
                variants={variants}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
            />
        </Frame>
    )
}

Card3dAssignment.defaultProps = {
    width: cardWidth,
    height: cardHeight,
}
