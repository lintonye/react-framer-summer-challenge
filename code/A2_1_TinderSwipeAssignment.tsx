import * as React from "react"
import {
    Frame,
    useMotionValue,
    useTransform,
    useAnimation,
    addPropertyControls,
    ControlType,
} from "framer"

export function CardStack(props) {
    function generateCard() {
        {
            return React.cloneElement(<TinderSwipeAssignment />)
        }
    }
    return (
        <div>
            <Frame background={"transparent"} color="#999" style={{}} center>
                That's all of them...
            </Frame>
            {generateCard()}
            {generateCard()}
        </div>
    )
}

export function TinderSwipeAssignment(props) {
    const position = useMotionValue(0)
    const rotate = useTransform(
        position,
        [-props.cardSwipedDistance, props.cardSwipedDistance],
        [-props.swipeRotation, props.swipeRotation]
    )
    const opacity = useTransform(
        position,
        [
            -props.cardSwipedDistance,
            -props.cardSwipedDistance / 2,
            0,
            props.cardSwipedDistance / 2,
            props.cardSwipedDistance,
        ],
        [props.opacitySwiped, 1, 1, 1, props.opacitySwiped]
    )
    const colorOpacity = useTransform(
        position,
        [-props.cardSwipedDistance, 0, props.cardSwipedDistance],
        [1, props.opacitySwiped, 1]
    )

    const color = useTransform(
        position,
        [-props.cardSwipedDistance, 0, props.cardSwipedDistance],
        ["#B10000", "#ffffff00", "#006400ff"]
    )
    const animation = useAnimation()
    const variants = {
        left: { x: -props.cardAnimatedDistance },
        right: { x: props.cardAnimatedDistance },
        hidden: {
            boxShadow:
                "0px 0px 0px 0 rgba(0,0,0,0), 0px 0x 0px 0 rgba(0,0,0,0)",
            scale: 0.5,
        },
        lifted: {
            boxShadow:
                "0px 12px 18px 0 rgba(0,0,0,0.125), 0px 32px 64px 0 rgba(0,0,0,0.125)",
            transition: { duration: 0.2 },
            scale: 1.03,
        },
        initial: {
            x: 0,
            y: 0,
            rotateZ: 0,
            transition: { duration: 0.1 },
            scale: 1.0,
            boxShadow:
                "0px 6px 12px 0 rgba(0,0,0,0.125), 0px 16px 32px 0 rgba(0,0,0,0.125)",
        },
        returnToInitial: {
            x: 0,
            y: 0,
            rotateZ: 0,
            transition: { duration: 0.1, delay: 0.5 },
            scale: 1,
            boxShadow:
                "0px 6px 12px 0 rgba(0,0,0,0.125), 0px 16px 32px 0 rgba(0,0,0,0.125)",
        },
    }

    function loadingAnimation() {
        animation.start("initial")
    }
    function whileTap() {
        animation.start("lifted")
    }
    function onPan(_, info) {
        console.log(info.offset.x, info.offset.y)
    }
    async function onDragEnd(_, info) {
        if (info.offset.x > props.swipeThreshold) {
            console.log("swiped right")
            await animation.start("right")
            await animation.start("returnToInitial")
        } else if (info.offset.x < -props.swipeThreshold) {
            console.log("swiped left")
            await animation.start("left")
            await animation.start("returnToInitial")
        } else {
            console.log("no decision")
            animation.start("initial")
        }
    }

    return (
        <Frame
            center
            height={props.cardHeight}
            width={props.cardWidth}
            borderRadius={16}
            rotate={rotate}
            opacity={opacity}
            drag
            animate={animation}
            x={position}
            variants={variants}
            onTapStart={whileTap}
            onPan={onPan}
            onPanEnd={onDragEnd}
            overflow="hidden"
            style={{
                boxShadow:
                    "0px 6px 12px 0 rgba(0,0,0,0.25), 0px 16px 32px 0 rgba(0,0,0,0.25)",
                fontFamily: "sans-serif",
                color: "white",
            }}
        >
            <Frame
                size={"100%"}
                style={{
                    backgroundImage: "url(https://source.unsplash.com/random)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#55CCFF",
                }}
            />
            <Frame
                name="swipeColor"
                size={"100%"}
                background={color}
                opacity={colorOpacity}
            />
            <Frame
                name="backgroundGradient"
                size={"100%"}
                style={{
                    background: `linear-gradient(to bottom, #43008900, #00000050`,
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                }}
            >
                <div>
                    <div
                        style={{
                            fontSize: 28,
                            fontWeight: 700,
                            lineHeight: 1.3,
                        }}
                    >
                        Sober Lynn
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 300 }}>
                        30, Hamburg
                    </div>
                </div>
            </Frame>
        </Frame>
    )
}

TinderSwipeAssignment.defaultProps = {
    height: 812,
    width: 375,
    cardHeight: 500,
    cardWidth: 375 - 32,
    cardSwipedDistance: 300,
    cardAnimatedDistance: 500,
    swipeThreshold: 100,
    swipeRotation: 10,
    opacitySwiped: 0.1,
}

addPropertyControls(CardStack, {
    cardTopPosition: {
        type: ControlType.Number,
        defaultValue: 80,
        min: 0,
        max: 400,
        step: 8,
    },
    cardDistance: {
        type: ControlType.Number,
        defaultValue: 8,
        min: -50,
        max: 50,
        step: 1,
    },
    children: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
    },
})
