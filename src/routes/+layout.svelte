<script lang="ts">
	import "@fontsource/montserrat";
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<main class="flex flex-col bg-background min-h-screen">
	<Navbar />
	<div class="flex-auto [&>*]:( max-w-3xl mx-auto w-full) z-0">
		<slot />
	</div>
	<Footer />
</main>
