<script lang="ts">
	export let logo: string;
	export let href: string;
</script>

<div class="inline-flex flex-row vertical-end gap-1 antialiased">
	<span class="{logo} h-6 w-6 self-center text-blue-7" /><a
		{href}
		target="_blank"
		referrerpolicy="no-referrer"
		rel="e"
		class="underline"><slot /></a
	>
</div>
