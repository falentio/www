<script lang="ts">
	export let logo: string;
	export let href: string;
</script>

<span class="{logo} h-6 w-6 self-center text-blue-7 inline-block vertical-end mx-1" />
<a {href} target="_blank" referrerpolicy="no-referrer" rel="external" class="underline"><slot /></a>

<style>
	div {
		--uno: "inline-flex vertical-end gap-1 antialiased outline w-min";
	}
</style>
