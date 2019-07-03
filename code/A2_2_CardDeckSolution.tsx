//React Challenge Webinar 2.2: Radio Group (React State)
//2. Card Deck

// REQUIREMENTS
// 1. Create a `Card` component
// 2. Make a deck of cards

//SOLUTION

import * as React from "react"
import { Frame, useMotionValue, useTransform, useAnimation } from "framer"
import "./styles.css"

function Card({ image, backgroundColor }) {
    const style = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor,
        boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.25)",
    }

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
            image={image}
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

export function CardDeckSolution() {
    const cards = [
        {
            image:
                "https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fbird_strong_small.svg?v=1560032432704",
            backgroundColor: "#55CCFF",
        },
        {
            image:
                "https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fbird_fat_black_medium.svg?v=1557968629951",
            backgroundColor: "#FF88AA",
        },
        {
            image:
                "https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fdesigner.svg?v=1560273527081",
            backgroundColor: "#66BB66",
        },
    ]
    return (
        <div>
            {cards.reverse().map(function({ image, backgroundColor }) {
                return <Card image={image} backgroundColor={backgroundColor} />
            })}
        </div>
    )
}

CardDeckSolution.defaultProps = {
    height: 300,
}
