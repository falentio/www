<section class="p-4 w-full">
	<h2 class="text-3xl font-semibold text-blue-7 mb-4">Recent Project</h2>
	<div class="flex flex-row flex-wrap items-center justify-between gap-2">
		{#each new Array(6) as _}
			<div class="max-w-90 border w-full flex flex-col mx-auto overflow-hidden shadow rounded-lg">
				<div class="aspect-[2/1]">
					<img
						loading="lazy"
						src="//catsum.deno.dev/seed/project-1/400/200"
						alt="project"
						class="w-full object-cover"
					/>
				</div>
				<div class="px-4 py-2">
					<span class="text-xl font-semibold">PRoject Foo</span>
					<ul class="flex flex-row gap-1 justify-end">
						<li>
							<a target="_blank" class="" href="//github.com/falentio">
								<span class="i-mdi:github w-6 h-6" /></a
							>
						</li>
						<li>
							<a target="_blank" class="" href="//github.com/falentio">
								<span class="i-mdi:launch w-6 h-6" /></a
							>
						</li>
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	ul > li {
		--uno: "rounded p-1 text-blue-6 hover:(bg-blue-4/50) transition-colors duration-400";
	}
</style>
