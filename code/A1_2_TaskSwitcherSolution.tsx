// Webinar Week 1 Part 2 Solution provided by Linton

import * as React from "react"
import { Frame, useAnimation, transform } from "framer"

import "./styles.css"

export function ExportSwitcherSolution() {
    const phoneWidth = 300
    const screenWidth = phoneWidth - 40
    const screenHeight = (screenWidth * 2436) / 1125
    const currentScreenAnimation = useAnimation()
    const gmapScreenAnimation = useAnimation()
    return (
        <div>
            {/* Phone frame */}
            <Frame
                width={phoneWidth}
                height={(phoneWidth * 1023) / 510}
                borderRadius={30}
                center
                background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2F510px-IPhone_X_vector.svg.png)"
                style={{ backgroundSize: "cover" }}
            >
                {/* Screen enclosure */}
                <Frame
                    background="transparent"
                    width={screenWidth}
                    height={screenHeight}
                    left={(phoneWidth - screenWidth) / 2}
                    top={20}
                    overflow="hidden"
                    borderRadius={25}
                >
                    {/* gmap screen */}
                    <Frame
                        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fgmap.jpg)"
                        width={screenWidth}
                        height={screenHeight}
                        style={{ backgroundSize: "cover" }}
                        scale={0.7}
                        borderRadius={25}
                        left={-230}
                        top={-15}
                        animate={gmapScreenAnimation}
                    />
                    {/* Current Screen */}
                    <Frame
                        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Ftwitter-screenshot.jpg)"
                        width={screenWidth}
                        height={screenHeight}
                        style={{
                            backgroundSize: "cover",
                            transformOrigin: "bottom",
                        }}
                        borderRadius={25}
                        drag="y"
                        dragConstraints={{ top: -100, bottom: 0 }}
                        dragElastic={false}
                        animate={currentScreenAnimation}
                        onDrag={function(_, info) {
                            const scale = transform(
                                info.point.y,
                                [-100, 0],
                                [0.7, 1]
                            )
                            currentScreenAnimation.start({
                                scale,
                                transition: { duration: 0.1 },
                            })
                            if (info.point.y <= -100) {
                                gmapScreenAnimation.start({
                                    x: 40,
                                    transition: { duration: 0.2 },
                                })
                            }
                        }}
                        onDragEnd={function() {
                            currentScreenAnimation.start({
                                scale: 1,
                                y: 0,
                                transition: { duration: 0.2 },
                            })
                            gmapScreenAnimation.start({ x: 0 })
                        }}
                    />
                </Frame>
            </Frame>
        </div>
    )
}
