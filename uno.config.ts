import { defineConfig, presetUno } from "unocss";
import variantGroup from "@unocss/transformer-variant-group";
import directives from "@unocss/transformer-directives";
import compileClass from "@unocss/transformer-compile-class";
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
                "aspect-ratio": "1/1"
            },
        }) as any,
    ],
    transformers: [
        compileClass(),
        variantGroup(),
        directives(),
    ],
    extractors: [extractorSvelte()],
    theme: {
        fontFamily: {
            comic: "'Comic Mono', sans-serif",
            montserrat: "'Montserrat', sans-serif",
        },
    },
    shortcuts: {
        "to-background": "to-white dark:to-slate-950",
        "bg-background": "bg-white text-slate-950 dark:bg-slate-950 dark:text-blue-2",
        "text-inverse": "text-blue-2 dark:text-slate-950",
        "bg-focus": "bg-slate-2 dark:bg-slate-7"
    },
    safelist: ["hidden"],
});
