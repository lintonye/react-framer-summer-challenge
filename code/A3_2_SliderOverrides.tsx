import { Override, Data, transform } from "framer"

// Override Docs: https://framer.com/docs/overrides

const data = Data({ cheekScale: 0.6 })

export function Cheek(): Override {
    return {
        animate: { scale: data.cheekScale },
        transition: { type: "spring", damping: 5 },
    }
}

export function Knob(): Override {
    return {
        drag: "x",
        dragConstraints: { left: 0, right: 240 },
        dragElastic: false,
        dragMomentum: false,
        onDrag: function(_, info) {
            const scale = transform(info.point.x, [0, 240], [0.6, 1.5])
            data.cheekScale = scale
        },
    }
}
