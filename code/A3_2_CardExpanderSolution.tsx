import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const data = Data({ expandedCardId: null })

export function Card(props): Override {
    const { left, top, width, id } = props
    return {
        animate: data.expandedCardId === id ? "detail" : "list",
        variants: {
            list: {
                x: 0,
                y: 0,
                width,
                borderRadius: 17,
            },
            detail: {
                x: -left,
                y: -top,
                width: 375,
                borderRadius: 0,
            },
        },
        onTap: function() {
            if (data.expandedCardId === null) data.expandedCardId = id
            else data.expandedCardId = null
        },
    }
}

export function StatusBar(): Override {
    return {
        animate: data.expandedCardId === null ? "list" : "detail",
        variants: {
            list: { y: 0 },
            detail: { y: -25 },
        },
    }
}

export function Description(props): Override {
    const { left, width } = props
    return {
        animate: data.expandedCardId === null ? "list" : "detail",
        variants: {
            list: { x: 0, width, height: 0, y: 0, opacity: 0.5 },
            detail: {
                x: -left,
                y: -120,
                width: 375,
                height: 450,
                opacity: 1,
            },
        },
        transition: { duration: 0.2 },
    }
}
