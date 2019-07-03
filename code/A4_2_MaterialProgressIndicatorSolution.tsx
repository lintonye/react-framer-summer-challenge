import * as React from "react"
import { useRef, useState, useEffect } from "react"
import { transform } from "framer"
import "./styles.css"

function Circle({ progress }) {
    const pathRef = useRef<SVGPathElement>()
    const [totalLength, setTotalLength] = useState(0)
    useEffect(() => {
        setTotalLength(pathRef.current.getTotalLength())
    }, [])
    const offset =
        (1 -
            transform(
                progress,
                [0, 0.2, 0.4, 0.6, 0.7, 0.8, 1].map(v => v * 100),
                [0.3, 0.1, 0.1, 0.7, 0.7, 0.5, 0.3]
            )) *
        totalLength
    const rotate = transform(progress, [0, 100], [0, 720])
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            transform={`rotate(${rotate})`}
        >
            <path
                ref={pathRef}
                d="M 22 4 C 31.941 4 40 12.059 40 22 C 40 31.941 31.941 40 22 40 C 12.059 40 4 31.941 4 22 C 4 12.059 12.059 4 22 4 Z"
                fill="transparent"
                strokeDasharray={totalLength}
                strokeDashoffset={offset}
                strokeWidth="6"
                stroke={"#119955"}
            />
        </svg>
    )
}

function ProgressIndicator() {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => (p < 100 ? p + 1 : 0))
        }, 20)
        return () => clearInterval(interval)
    }, [])
    return <Circle progress={progress} />
}

export function MaterialProgressIndicatorSolution() {
    return (
        <div>
            <div className="container">
                <ProgressIndicator />
            </div>
        </div>
    )
}

MaterialProgressIndicatorSolution.defaultProps = {
    width: 44,
    height: 44,
}
