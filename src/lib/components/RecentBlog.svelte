<section class="p-4">
	<h2 class="text-3xl font-semibold text-blue-7">Blog</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-2 py-2">
		{#each Array(6) as _}
			<div class="grid grid-cols-3 rounded-lg shadow border overflow-hidden max-w-sm">
				<div class="w-full aspect-square relative">
					<img src="//catsum.deno.dev/seed/{_}/300" alt={_} />
				</div>
				<section class="p-2 col-span-2">
					<h3 class="font-semibold text-lg capitalize">Foooo</h3>
					<p class="line-clamp-2 md:line-clamp-3 text-sm">
						This some preview text that will be displayed whenever someone visit this page
					</p>
				</section>
			</div>
		{/each}
	</div>
</section>
