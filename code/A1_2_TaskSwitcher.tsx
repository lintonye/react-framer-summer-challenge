// Webinar Week 1 Part 2

// REQUIREMENTS
// 1. Fork this sandbox: https://codesandbox.io/s/sliderassignment2starter-bvpk6
// 2. Build the task switcher interaction using `drag` attributes and `useAnimation`

// HINTS
// 1. What could the `info.point.y` value be when the screen is dragged up? Use `console.log` to find out.
// 2. How to define `dragConstraints` when the drag direction is vertical?
// 3. Use both `onDrag` and `onDragEnd`
// 4. `useAnimation` can be used multiple times.
// 5. Use both `left`/`top` and `x` to put the Google map screen into the correct place and animate it
// 6. `transition` can be used in `animationControls.start()`. E.g.:
//     animationControls.start({
//       x: 100,
//       transition: { duration: 0.1 }
//     })
// Use this to give the animations some final touch.

import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    transform,
    useAnimation,
} from "framer"
import "./styles.css"

const screenWidth = 375
const screenHeight = 812

function PreviousScreen({ gmapScreenAnimation }) {
    return (
        <Frame
            name={"Google Maps Screen"}
            background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fgmap.jpg)"
            width={screenWidth}
            height={screenHeight}
            style={{ backgroundSize: "cover" }}
            scale={0.7}
            borderRadius={25}
            left={-350}
            top={22}
            animate={gmapScreenAnimation}
        />
    )
}

function CurrentScreen({ x = 0, onDrag, onDragEnd, currentScreenAnimation }) {
    return (
        <Frame
            background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Ftwitter-screenshot.jpg)"
            width={"100%"}
            height={"100%"}
            style={{
                backgroundSize: "cover",
            }}
            originY={1}
            originX={0.5}
            borderRadius={25}
            drag
            dragConstraints={{ top: -100, bottom: 0 }}
            dragElastic={false}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            animate={currentScreenAnimation}
        />
    )
}

function Screen() {
    const currentScreenAnimation = useAnimation()
    const gmapScreenAnimation = useAnimation()
    return (
        <Frame
            name={"Screen enclosure"}
            background="transparent"
            width={"100%"}
            height={"100%"}
            overflow="hidden"
        >
            <PreviousScreen gmapScreenAnimation={gmapScreenAnimation} />
            <CurrentScreen
                x={0}
                onDrag={function(_, info) {
                    const scale = transform(info.point.y, [-100, 0], [0.7, 1])
                    currentScreenAnimation.start({
                        scale,
                        transition: { duration: 0.1 },
                    })
                    if (info.point.y <= -10) {
                        gmapScreenAnimation.start({
                            x: info.point.x + 74,
                            transition: { duration: 0.001 },
                        })
                    }
                }}
                onDragEnd={function() {
                    currentScreenAnimation.start({
                        scale: 1,
                        y: 0,
                        x: 0,
                        transition: { duration: 0.2 },
                    })
                    gmapScreenAnimation.start({
                        x: 0,
                        transition: { duration: 0.1 },
                    })
                }}
                currentScreenAnimation={currentScreenAnimation}
            />
        </Frame>
    )
}

export function TaskSwitcher() {
    return <Screen />
}

TaskSwitcher.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
