// Webinar Week 2

import * as React from "react"
import { Frame, useAnimation, transform } from "framer"
import "./styles.css"

const screenWidth = 375
const screenHeight = 812

function Skinny(props) {
    return (
        <Frame width={290} center="x" background="transparent" top={50}>
            <Frame
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fskinny-portrait.png)"
                width={290}
                height={290}
                borderRadius={150}
            />
            <Frame
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fcheek.png)"
                width={79}
                height={67}
                left={155}
                top={135}
                animate={props.cheekAnimate}
            />
        </Frame>
    )
}

function Slider(props) {
    return (
        <Frame
            center
            width={280}
            height={15}
            borderRadius={30}
            backgroundColor="white"
        >
            <Frame
                size={60}
                borderRadius={30}
                center="y"
                backgroundColor="white"
                shadow="0 1px 5px 0 rgba(0, 0, 0, 0.25)"
                drag={"x"}
                dragConstraints={{ left: 0, right: 220 }}
                dragElastic={false}
                dragMomentum={false}
                onDrag={props.onDrag}
            />
        </Frame>
    )
}

export function SkinnyAlternative() {
    const animationControls = useAnimation()
    return (
        <div>
            <Skinny cheekAnimate={animationControls} />
            <Slider
                onDrag={function(event, info) {
                    const scale = transform(info.point.x, [0, 220], [0.4, 1.5])
                    animationControls.start({ scale }) // { scale: scale }
                }}
            />
        </div>
    )
}

SkinnyAlternative.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
