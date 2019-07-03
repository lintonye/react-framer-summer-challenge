// Webinar Week 1 Part 2

// REQUIREMENTS
// 1. Fork this sandbox:  https://codesandbox.io/s/sliderassignment1start-udb1g
// 2. Add another slider that adjusts the rotation angle of Skinny’s wing

// HINTS
// - How do you animate the rotation of a frame? Check out this page: https://www.framer.com/api/frame/#visual
// - There’s a known bug in the `transform` function in framer library 1.0.9. Use 1.0.6 instead.
// - Use `y` attribute to move the slider downwards
// - Use this to customize the rotation center  `style={{ transformOrigin: "bottom right" }}`
//     - Also try it without `transformOrigin`
//     - You could also use `originX={1}` and `originY={1}`.
// - Do you still remember “object literal shorthand”? Use it to make the code look better!
// - This assignment also gives you exercise on reading other people’s code, understand it and make changes. Believe it or not, this is actually more important than writing completely new code.

import * as React from "react"
import { Frame, useAnimation, transform } from "framer"
import "./styles.css"

const screenWidth = 375
const screenHeight = 812

function Skinny({ cheekAnimation, wingAnimation }) {
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
            <Frame
                name={"Wing far side"}
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-far.png)"
                width={84}
                height={119}
                left={50}
                top={50}
                animate={wingAnimation}
                style={{ transformOrigin: "bottom right" }}
            />
            <Frame
                name={"Body"}
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fskinny-no-wings-2.png)"
                width={290}
                height={290}
            />
            <Frame
                name={"Cheek"}
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fcheek.png)"
                width={79}
                height={67}
                left={155}
                top={135}
                animate={cheekAnimation}
            />
            <Frame
                name={"Wing near side"}
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-near.png)"
                width={124}
                height={71}
                left={-20}
                top={110}
                animate={wingAnimation}
                // style={{ transformOrigin: "bottom right" }}
                originX={1}
                originY={1}
            />
        </Frame>
    )
}

function Slider({ y = 0, onDrag }) {
    return (
        <Frame
            width={280}
            height={15}
            borderRadius={30}
            center
            backgroundColor="white"
            y={y}
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
                onDrag={onDrag}
            />
        </Frame>
    )
}

export function SkinnyPose() {
    const cheekAnimation = useAnimation()
    const wingAnimation = useAnimation()
    return (
        <div>
            <Skinny
                cheekAnimation={cheekAnimation}
                wingAnimation={wingAnimation}
            />
            <Slider
                y={120}
                onDrag={function(event, info) {
                    const scale = transform(info.point.x, [0, 220], [0.4, 1.5])
                    cheekAnimation.start({ scale })
                }}
            />
            <Slider
                y={200}
                onDrag={function(event, info) {
                    const rotate = transform(info.point.x, [0, 220], [-50, 90])
                    wingAnimation.start({ rotate })
                }}
            />
        </div>
    )
}

SkinnyPose.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
