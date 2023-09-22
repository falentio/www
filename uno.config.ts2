import { defineConfig, presetUno } from "unocss";
import variantGroup from "@unocss/transformer-variant-group";
import directives from "@unocss/transformer-directives";
import compileClass from "@unocss/transformer-compile-class";
import presetIcons from "@unocss/preset-icons";
import extractorSvelte from "@unocss/extractor-svelte";

const prod = process.env.NODE_ENV === "production"
const trigger = /(?<=(class\=|\"class\"\,\s))\"([^']*?)"/gi
// debugging purpose
// const ril = String.prototype.matchAll
// String.prototype.matchAll = function () {
//     if (trigger === arguments[0])
//         console.log([...ril.bind(this)(...arguments), 12345678][0])
//     return ril.bind(this)(...arguments)
// }

const createHash = () => {
    const classes = new Set()
    return (s: string) => {
        s = s.split(" ").sort().join(" ")
        classes.add(s)
        const index = [...classes].indexOf(s)
        return index.toString(36)
    }
}
export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            cdn: "https://cdn.skypack.dev/",
            warn: true,
            extraProperties: {
                display: "block",
                width: "100%",
                height: "100%",
                "z-index": "0",
            },
        }),
    ],
    transformers: [
        prod && compileClass({
            trigger,
            hashFn: createHash(),
            classPrefix: ""
        }),
        variantGroup(),
        directives()
    ].filter(Boolean) as any[],
    extractors: [extractorSvelte()],
    theme: {
        fontFamily: {
            comic: "'Comic Mono', sans-serif",
        },
    },
    safelist: ["hidden"],
});
