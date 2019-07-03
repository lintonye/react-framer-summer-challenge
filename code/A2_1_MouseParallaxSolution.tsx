import * as React from "react"
import { Frame, useAnimation } from "framer"

import "./styles.css"

const screenWidth = 375
const screenHeight = 812

export function MouseParallaxSolution() {
    const animBg = useAnimation()
    const animSun = useAnimation()
    const animCloud = useAnimation()
    const animBird = useAnimation()

    function handleMouseMove({ clientX: x, clientY: y }) {
        const xFromCenter = x - window.innerWidth / 2
        const yFromCenter = y - window.innerHeight / 2
        animBg.start({ x: xFromCenter / 10, y: yFromCenter / 10 })
        animSun.start({ x: xFromCenter / 8, y: yFromCenter / 8 })
        animCloud.start({ x: xFromCenter / 6, y: yFromCenter / 6 })
        animBird.start({ x: xFromCenter / 3.5, y: yFromCenter / 3.5 })
    }
    return (
        <div>
            <Frame
                size={(600 / 600) * 375}
                onMouseMove={handleMouseMove}
                background={null}
                position="relative"
            >
                <Frame
                    name={"bg"}
                    animate={animBg}
                    size={(500 / 600) * 375}
                    top={(50 / 600) * 375}
                    left={(20 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/119/119596.svg)"
                />
                <Frame
                    // sun
                    animate={animSun}
                    left={(155 / 600) * 375}
                    top={(15 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/789/789395.svg)"
                />
                <Frame
                    name={"cloud"}
                    animate={animCloud}
                    left={(335 / 600) * 375}
                    top={(55 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/414/414927.svg)"
                />
                <Frame
                    name={"bird"}
                    animate={animBird}
                    left={(35 / 600) * 375}
                    top={(200 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/789/789392.svg)"
                />
            </Frame>
        </div>
    )
}

MouseParallaxSolution.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
