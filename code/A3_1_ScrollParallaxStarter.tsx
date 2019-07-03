//React Challenge Webinar 2.2: Radio Group (React State)
//3. Card Deck Continued

// REQUIREMENTS
// 1. When a card is swiped to the right, add the name of the card to the board on the right
// 2. When a card is swiped left, do nothing.

// STARTER

import * as React from "react"
import { Scroll, Frame } from "framer"
import "./styles.css"

const screenWidth = 414
const screenHeight = 896

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
            style={style}
            {...props}
        />
    )
}

export function ScrollParallaxStarter() {
    const textLeft = {
        textAlign: "left",
        justifyContent: "flex-start",
    }

    return (
        <Scroll
            width="100%"
            height="100%"
            contentHeight={3000}
            wheelEnabled={true}
        >
            {/* Title  */}
            <PagePart
                width={1116}
                height={726}
                image="https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fimage.png?v=1560475177317"
            />
            <Frame
                height={640}
                top={40}
                style={{
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0,0,0,0))",
                }}
            />
            {/* iphone */}
            <PagePart
                width={333}
                height={654}
                top={420}
                image="https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fiphonexr.png?v=1560479971348"
            />
            {/* Feature text */}
            <PagePart
                color="white"
                background="transparent"
                width={220}
                height="auto"
                top={-300}
                x={350}
                style={{
                    fontSize: 25,
                    fontFamily: "sans-serif",
                    display: "grid",
                    gridTemplateColumns: "220px",
                    gridGap: 40,
                    justifyContent: "center",
                }}
            >
                <PagePart size="auto" style={textLeft}>
                    The largest LCD ever on an iPhone
                </PagePart>
                <PagePart size="auto" style={textLeft}>
                    Industry-leading colour accuracy
                </PagePart>
                <PagePart size="auto" style={textLeft}>
                    Wide colour gamut
                </PagePart>
                <PagePart size="auto" style={textLeft}>
                    True Tone
                </PagePart>
                <PagePart size="auto" style={textLeft}>
                    Tap to wake
                </PagePart>
            </PagePart>
            {/* 6.1" display */}
            <PagePart
                top={-700}
                color="white"
                center="x"
                x={-40}
                originX={0}
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

ScrollParallaxStarter.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
