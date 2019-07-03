// Webinar Week 2 Part 1 Solution provided by Linton

import * as React from "react"
import { Frame, useMotionValue, useTransform, useAnimation } from "framer"
import "./styles.css"

const style = {
    backgroundImage:
        "url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fbird_strong_small.svg?v=1560032432704)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundColor: "#44DDEE",
    boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.25)",
}

export function TinderSwipeSolution() {
    const position = useMotionValue(0)
    const rotate = useTransform(position, [-200, 200], [-50, 50])
    const opacity = useTransform(
        position,
        [-200, -100, 0, 100, 200],
        [0, 1, 1, 1, 0]
    )
    const anim = useAnimation()
    return (
        <Frame
            center
            drag="x"
            height={300}
            style={style}
            dragConstraints={{ left: -200, right: 200 }}
            x={position}
            animate={anim}
            rotate={rotate}
            opacity={opacity}
            borderRadius={10}
            onDragEnd={function(_, info) {
                if (Math.abs(info.point.x) < 100) {
                    anim.start({ x: 0 })
                } else {
                    anim.start({ x: info.point.x < 0 ? -200 : 200 })
                }
            }}
        />
    )
}

TinderSwipeSolution.defaultProps = {
    height: 300,
}
