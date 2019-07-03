//React Challenge Webinar 2.2: Radio Group (React State)
//3. Card Deck Continued

// REQUIREMENTS
// 1. When a card is swiped to the right, add the name of the card to the board on the right
// 2. When a card is swiped left, do nothing.

//SOLUTION

const screenWidth = 414
const screenHeight = 896

import * as React from "react"
import {
    Scroll,
    Frame,
    useMotionValue,
    useTransform,
    useAnimation,
} from "framer"

import {
    useSpeed,
    usePositiveOffset,
    useSticky,
    useTrigger,
} from "./UseParallax"
import "./styles.css"

function PagePart({
    image,
    style = {
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    ...props
}) {
    return (
        <Frame
            backgroundColor="transparent"
            position="relative"
            image={image}
            style={{ ...style }}
            {...props}
        />
    )
}

export function ScrollParallaxSolution() {
    const offset = useMotionValue(0)
    const positiveOffset = usePositiveOffset(offset)
    const headerBlockOpacity = useTransform(positiveOffset, [0, 100], [0, 1])
    const iphoneScale = useTransform(positiveOffset, [0, 800], [2.2, 1])
    const iphoneY = useSpeed(positiveOffset, [0, 750], 1 / 2, [750, 1500], -1)
    const featureContainerOpacity = useTransform(
        positiveOffset,
        [800, 802],
        [0, 1]
    )
    const featureContainerY = useSpeed(positiveOffset, [750, 1500], -0.7)
    let start = 750,
        gap = (1200 - start) / 4
    const feature1Opacity = useTransform(
        positiveOffset,
        [start, start + gap],
        [0, 1]
    )
    start = start + gap
    const feature2Opacity = useTransform(
        positiveOffset,
        [start, start + gap],
        [0, 1]
    )
    start = start + gap
    const feature3Opacity = useTransform(
        positiveOffset,
        [start, start + gap],
        [0, 1]
    )
    start = start + gap
    const feature4Opacity = useTransform(
        positiveOffset,
        [start, start + gap],
        [0, 1]
    )
    start = start + gap
    const feature5Opacity = useTransform(
        positiveOffset,
        [start, start + gap],
        [0, 1]
    )
    const textLeft = {
        textAlign: "left",
        justifyContent: "flex-start",
    }
    // display size text
    const displaySizeY = useSticky(positiveOffset, [750, 1500])
    const displaySizeAnim = useAnimation()

    useTrigger(positiveOffset, [1000, 1200], direction => {
        if (direction < 0) displaySizeAnim.start({ scale: 1, opacity: 1 })
        else displaySizeAnim.start({ scale: 0, opacity: 0 })
    })

    return (
        <Scroll
            width="100%"
            height="100%"
            contentHeight={3000}
            wheelEnabled={true}
            contentOffsetY={offset}
        >
            <PagePart
                name={"title"}
                width={1116}
                height={726}
                image="https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2FScreen%20Shot%202019-06-30%20at%203.28.50%20PM.png?v=1561933756475"
            />
            <Frame
                height={640}
                top={40}
                opacity={headerBlockOpacity}
                style={{
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0,0,0,0))",
                }}
            />

            <PagePart
                name={"iPhone"}
                width={333}
                height={654}
                top={420}
                scale={iphoneScale}
                y={iphoneY}
                image="https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fiphonexr.png?v=1560479971348"
            />
            <PagePart
                name={"Feature Text"}
                color="white"
                background="transparent"
                width={220}
                height="auto"
                top={-300}
                x={350}
                opacity={featureContainerOpacity}
                y={featureContainerY}
                style={{
                    fontSize: 25,
                    fontFamily: "sans-serif",
                    display: "grid",
                    gridTemplateColumns: "220px",
                    gridGap: 40,
                    justifyContent: "center",
                }}
            >
                <PagePart
                    size="auto"
                    style={textLeft}
                    opacity={feature1Opacity}
                >
                    The largest LCD ever on an iPhone
                </PagePart>
                <PagePart
                    size="auto"
                    style={textLeft}
                    opacity={feature2Opacity}
                >
                    Industry-leading colour accuracy
                </PagePart>
                <PagePart
                    size="auto"
                    style={textLeft}
                    opacity={feature3Opacity}
                >
                    Wide colour gamut
                </PagePart>
                <PagePart
                    size="auto"
                    style={textLeft}
                    opacity={feature4Opacity}
                >
                    True Tone
                </PagePart>
                <PagePart
                    size="auto"
                    style={textLeft}
                    opacity={feature5Opacity}
                >
                    Tap to wake
                </PagePart>
            </PagePart>
            {/* 6.1" display */}
            <PagePart
                top={-700}
                opacity={0}
                scale={2}
                animate={displaySizeAnim}
                color="white"
                center="x"
                x={-40}
                originX={0}
                y={displaySizeY}
                style={{
                    fontSize: 25,
                    fontFamily: "sans-serif",
                }}
            >
                <div>iPhone XR</div>
                <div>6.1" display</div>
            </PagePart>
        </Scroll>
    )
}

ScrollParallaxSolution.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
