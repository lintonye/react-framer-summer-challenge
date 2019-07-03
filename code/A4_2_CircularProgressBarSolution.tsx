import * as React from "react"
import { useRef, useState, useEffect } from "react"
import { Frame, transform } from "framer"
import "./styles.css"

const screenWidth = 375
const screenHeight = 812

function CircularProgress({ progress }) {
    // Progress: [0, 100] ==> [779, 0]
    // useRef<..> here specifies what should go inside the ref, the container
    const pathRef = useRef<SVGPathElement>()
    const offset = transform(progress, [0, 100], [779, 0])
    let [totalLength, setTotalLength] = useState(0)
    useEffect(function() {
        setTotalLength(pathRef.current.getTotalLength())
    }, [])
    return (
        <Frame size={260} background={null} center>
            <Frame
                center
                color="green"
                size="auto"
                top={140}
                background={null}
                style={{ fontSize: 120 }}
                scale={0.7}
                opacity={0}
                animate={{
                    scale: progress < 100 ? 0.7 : 1,
                    opacity: progress < 100 ? 0 : 1,
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="140.66"
                    height="100.11"
                >
                    <path
                        d="M 46.477 100.11 L 0 53.633 L 5.931 47.703 L 46.477 88.249 L 134.729 0 L 140.66 5.93 Z"
                        fill="#119955"
                    />
                </svg>
            </Frame>

            <svg xmlns="http://www.w3.org/2000/svg" width="260" height="260">
                <path
                    ref={pathRef}
                    d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
                    fill="transparent"
                    strokeWidth="8"
                    stroke={"#119955"}
                    strokeDasharray={totalLength}
                    strokeDashoffset={offset}
                />
            </svg>
        </Frame>
    )
}

export function CircularProgressBarSolution() {
    const [progress, setProgress] = useState(0)
    useEffect(function() {
        const interval = setInterval(function() {
            setProgress(function(p) {
                return p < 100 ? p + 1 : 100
            })
        }, 20)
        return function() {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <div className="container">
                <CircularProgress progress={progress} />
            </div>
        </div>
    )
}

CircularProgressBarSolution.defaultProps = {
    width: screenWidth,
    height: screenHeight,
}
