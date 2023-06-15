<script lang="ts">
	import { page } from "$app/stores";
	const onChange = (e: { currentTarget: HTMLInputElement }) => {
		const body = document.querySelector("body");
		if (!body) {
			return;
		}
		if (e.currentTarget.checked) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "auto";
		}
	};
</script>

<div class="flex flex-col w-max z-30 <sm:(bottom-0 fixed) sm:(sticky top-0)">
	<input type="checkbox" id="menu" class="hidden peer" on:change={onChange} />
	<div
		class="flex-auto transition-all duration-350 -left-full <sm:(relative text-2xl peer-checked:left-0) flex flex-row"
	>
		<nav class="p-2 text-xl sm:(h-screen bg-zinc-8 w-36) overflow-y-auto flex flex-col">
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
			<label for="menu" class="-mx-2 flex-auto <sm:w-screen w-full block">
				<div class="h-screen sm:hidden" />
				<div
					class="
						text-sky-2 px-2 <sm:space-y-1 overflow-hidden flex flex-col w-max text-sky-4 capitalize underline
						[&>a]:(flex flex-row gap-2 items-center p-1)
						[&>a]:<sm:(bg-zinc-8 rounded-lg px-3 text-sm)
						[&>a>span]:(w-4 h-4)
					"
				>
					<a class="hover:text-sky-6" href="/">
						<span class="i-mdi:home" />
						Home
					</a>
					<a class="hover:text-sky-6" href="/">
						<span class="i-mdi:post" />
						blog
					</a>
					<a class="hover:text-sky-6" href="/">
						<span class="i-mdi:library-books" />
						Projects
					</a>
					<a class="hover:text-sky-6" href="/">
						<span class="i-mdi:information-outline" />
						About
					</a>
				</div>
			</label>
		</nav>
	</div>

	<label for="menu" class="m-4 mt-0 rounded-full bg-zinc-8 shadow h-8 w-8 p-2 sm:hidden text-sky-4">
		<span class="i-mdi:menu" />
	</label>
</div>
