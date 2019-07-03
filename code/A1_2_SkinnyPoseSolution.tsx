// Webinar Week 1 Part 2 Solution provided by Linton

import * as React from "react"
import { Frame, useAnimation, transform } from "framer"
import "./styles.css"

const screenWidth = 375
const screenHeight = 812

function Slider(props) {
    return (
        <Frame
            width={280}
            height={15}
            borderRadius={30}
            center
            backgroundColor="white"
            y={props.y}
        >
            <Frame
                size={60}
                borderRadius={30}
                center="y"
                backgroundColor="white"
                shadow="0 1px 5px 0 rgba(0, 0, 0, 0.25)"
                drag="x"
                dragConstraints={{ left: 0, right: 220 }}
                dragElastic={false}
                dragMomentum={false}
                onDrag={props.onDrag}
            />
        </Frame>
    )
}

export function SkinnyPoseSolution() {
    const cheekAnimation = useAnimation()
    const wingAnimation = useAnimation()
    return (
        <div className="App">
            <Skinny
                cheekAnimation={cheekAnimation}
                wingAnimation={wingAnimation}
            />
            <Slider
                onDrag={function(event, info) {
                    const scale = transform(info.point.x, [0, 220], [0.4, 1.5])
                    cheekAnimation.start({ scale })
                }}
            />
            <Slider
                y={80}
                onDrag={function(event, info) {
                    const rotate = transform(info.point.x, [0, 220], [-50, 90])
                    wingAnimation.start({ rotate })
                }}
            />
        </div>
    )
}

function Skinny(props) {
    return (
        <Frame
            size={290}
            center="x"
            background="transparent"
            top={50}
            borderRadius={150}
            overflow="hidden"
            backgroundColor="white"
        >
            {/* Wing far side */}
            <Frame
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-far.png)"
                width={84}
                height={119}
                left={50}
                top={50}
                animate={props.wingAnimation}
                style={{ transformOrigin: "bottom right" }}
            />
            {/* body */}
            <Frame
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fskinny-no-wings-2.png)"
                width={290}
                height={290}
            />
            {/* Cheek */}
            <Frame
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fcheek.png)"
                width={79}
                height={67}
                left={155}
                top={135}
                animate={props.cheekAnimation}
            />
            {/* Wing near side */}
            <Frame
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-near.png)"
                width={124}
                height={71}
                left={-20}
                top={110}
                animate={props.wingAnimation}
                style={{ transformOrigin: "bottom right" }}
            />
        </Frame>
    )
}

SkinnyPoseSolution.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
