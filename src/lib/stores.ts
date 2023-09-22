import { browser } from "$app/environment";
import { writable } from "svelte/store";

export function persisted<T>(
    key: string,
    defaultVal: T,
    storage = browser ? localStorage : null,
) {
    const s = writable(defaultVal)
    if (storage) {
        const old = storage.getItem(key)
        if (old) {
            try {
                const parsed = JSON.parse(old)
                s.set(parsed)
            } catch { }
        }
        s.subscribe((v) => {
            const serialized = JSON.stringify(v)
            storage.setItem(key, serialized)
        })
    }
    return s
}

export const dark = persisted("dark", false)
if (browser) {
    dark.subscribe((v) => document.body.classList.toggle("dark", v))
}