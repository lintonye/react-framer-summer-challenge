// Week 2 Part 2

import * as React from "react"
import { Frame } from "framer"

import "./styles.css"

const screenWidth = 375
const screenHeight = 812

export function MouseParallaxStarter() {
    return (
        <div>
            <Frame
                size={(600 / 600) * 375}
                background={null}
                position="relative"
            >
                <Frame
                    name={"bg"}
                    size={(500 / 600) * 375}
                    top={(50 / 600) * 375}
                    left={(20 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/119/119596.svg)"
                />
                <Frame
                    name={"sun"}
                    // size={200}
                    left={(155 / 600) * 375}
                    top={(15 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/789/789395.svg)"
                />
                <Frame
                    name={"cloud"}
                    // size={200}
                    left={(335 / 600) * 375}
                    top={(55 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/414/414927.svg)"
                />
                <Frame
                    name={"bird"}
                    // size={200}
                    left={(35 / 600) * 375}
                    top={(200 / 600) * 375}
                    background="url(https://image.flaticon.com/icons/svg/789/789392.svg)"
                />
            </Frame>
        </div>
    )
}

MouseParallaxStarter.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
