<script lang="ts">
	import { browser } from "$app/environment";
	import { dark } from "$lib/stores";
	import Menu from "./Menu.svelte";

	let open = false;
	$: browser && (document.body.style.overflow = open ? "hidden" : "auto");
</script>

<div class="h-12 <md:order-last" />
<div class="<md:(bottom-2 w-full) fixed h-12 md:top-0 w-full z-50">
	<div class="relative flex flex-col items-end md:hidden">
		<input checked={open} type="checkbox" class="hidden peer" />
		<button
			on:click={() => (open = !open)}
			class="z-40 fixed inset-0 peer-checked:block hidden bg-slate-3/20 dark:bg-slate-7/20 backdrop-blur-sm"
		/>
		<div
			class="pointer-events-none bottom-full peer-checked:left-0 absolute left-full transition-left w-screen z-52 flex flex-col items-end p4"
		>
			<div
				class="flex flex-col gap-2 [&>*]:(bg-background pointer-events-auto rounded px-2 py-1 border inline-flex flex-row items-center gap-1) [&_span]:(w-6 h-6)"
			>
				<Menu />
			</div>
		</div>
	</div>
	<nav
		class="md:border-b <md:border-t px-4 py-2 flex flex-row justify-between gap-2 items-center z-50 relative bg-background"
	>
		<a class="text-xl font-semibold flex-1" href="/"> Falentio</a>
		<div class="hidden flex-auto md:flex flex-row gap-4 justify-center [&_span]:(hidden)">
			<Menu />
		</div>
		<div class="flex-1 flex flex-row justify-end gap-2">
			<button
				on:click={() => ($dark = !$dark)}
				class="text-blue-7 p-2 border rounded-md relative"
				class:bg={open}
				aria-label="dark mode toggle"
			>
				<span class:scale-0={!$dark} class="i-carbon:moon w-6 h-6 transition-all" />
				<span class:scale-0={$dark} class="i-carbon:sun w-6 h-6 transition-all absolute top-2" />
			</button>
			<button
				on:click={() => (open = !open)}
				class="text-blue-7 md:hidden p-2 border rounded-md"
				class:bg={open}
				aria-label="navigation"
			>
				<span class="i-mdi:menu w-6 h-6" />
			</button>
		</div>
	</nav>
</div>
