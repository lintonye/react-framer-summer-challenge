//Webinar Week 2 Part 2 Solution provided by Linton

import * as React from "react"
import { Frame, useAnimation } from "framer"

const cardWidth = 375
const cardHeight = (cardWidth * 1080) / 1920

export function Card3dSolution() {
    const normalShadow = "0px 10px 30px -5px rgba(0, 0, 0, 0.3)"
    const liftShadow = "0px 30px 30px -5px rgba(0, 0, 0, 0.3)"

    const style = {
        backgroundImage:
            "url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fvideo-cover-new.png?v=1560060840365)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: normalShadow,
        border: "15px solid white",
        fontFamily: "sans-serif",
    }
    const anim = useAnimation()
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
                animate={anim}
                center
                size={"100%"}
                borderRadius={20}
                onMouseMove={function(e) {
                    const { clientX, clientY } = e
                    const cx = clientX - window.innerWidth / 2
                    const cy = clientY - window.innerHeight / 2
                    anim.start({
                        rotateX: -cy / 20,
                        rotateY: cx / 20,
                        scale: 1.1,
                        boxShadow: liftShadow,
                    })
                }}
                onMouseLeave={function() {
                    anim.start({
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        boxShadow: normalShadow,
                    })
                }}
            />
        </Frame>
    )
}

Card3dSolution.defaultProps = {
    width: cardWidth,
    height: cardHeight,
}
