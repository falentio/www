import { defineConfig, presetUno } from "unocss";
import variantGroup from "@unocss/transformer-variant-group";
import directives from "@unocss/transformer-directives";
import presetIcons from "@unocss/preset-icons";
import extractorSvelte from "@unocss/extractor-svelte";

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
    transformers: [variantGroup(), directives()],
    extractors: [extractorSvelte()],
    theme: {
        fontFamily: {
            comic: "'Comic Mono', sans-serif",
        },
    },
    safelist: ["hidden"]
});
