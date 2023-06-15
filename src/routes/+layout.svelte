<script>
	import "virtual:uno.css";
	import "@fontsource/comic-mono";
	import "@unocss/reset/eric-meyer.css";
	import "../app.css";
	import NavBar from "$lib/components/NavBar.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		const base = new URL(window.location.href);
		for (const a of document.querySelectorAll("a")) {
			const href = new URL(a.href, base);
			if (href.hostname !== window.location.hostname) {
				a.target ||= "_blank";
			}
		}
	});
</script>

<div class="min-h-screen bg-zinc-7 text-sky-2 flex flex-col sm:flex-row relative overflow-x-clip">
	<NavBar />
	<div class="flex-col flex-auto z-40 mx-auto container">
		<slot />
	</div>
</div>
