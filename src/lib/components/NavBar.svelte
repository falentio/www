<script lang="ts">
	import { page } from "$app/stores";
</script>

<div class="<sm:(absolute bottom-0 w-full) flex flex-col w-max z-30 w-max">
	<input type="checkbox" id="menu" class="hidden peer" />
	<div
		class="transition-all transition-500 pointer-events-auto -left-full <sm:(relative text-2xl peer-checked:left-0) flex flex-row"
	>
		<nav class="p-2 text-xl sm:(h-screen bg-zinc-8) overflow-y-auto flex flex-col">
			{#if $page.url.pathname !== "/"}
				<a href="/" class="<sm:hidden text-3xl inline-flex flex-col space-y-1 items-center">
					<span class="w-16 h-16 block overflow-hidden rounded-full">
						<img
							alt="falentio profile"
							class="object-cover w-full h-full"
							src="https://github.com/falentio.png"
						/>
					</span>
					<span> Falentio </span>
				</a>
				<span class="<sm:hidden bg-sky-2 min-h-[0.0125rem] block my-1 w-full" />
			{/if}
			<label for="menu" class="min-h-screen -m-2 w-screen sm:hidden" />
			<div
				class="
					text-sky-2 px-2 <sm:space-y-1 overflow-hidden flex flex-col w-max
					[&>span]:(flex flex-row gap-2 items-center p-1)
					[&>span]:<sm:(bg-zinc-8 rounded-lg px-3 text-sm)
					[&>span>span]:(w-4 h-4)
					[&>span>a]:(underline text-blue-5 capitalize)
				"
			>
				<span>
					<span class="i-mdi:home" />
					<a href="/">Home</a>
				</span>
				<span>
					<span class="i-mdi:post" />
					<a href="/blog">blog</a>
				</span>
				<span>
					<span class="i-mdi:library-books" />
					<a href="/projects">Projects</a>
				</span>
				<span>
					<span class="i-mdi:information-outline" />
					<a href="/about">About</a>
				</span>
			</div>
		</nav>
	</div>

	<label for="menu" class="m-4 mt-0 rounded-full bg-zinc-8 shadow h-8 w-8 p-1 sm:hidden">
		<span class="i-mdi:menu bg-zinc-7" />
	</label>
</div>
