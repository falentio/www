<script lang="ts">
	import Lang from "$lib/components/Lang.svelte";
	import Profile from "$lib/components/Profile.svelte";
	import RecentBlog from "$lib/components/RecentBlog.svelte";
	import RecentProject from "$lib/components/RecentProject.svelte";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
	title="Kevin Falentio Website"
	description="Welcome to my website, I hope you love my website"
/>

<div class="flex flex-row <md:(flex-col text-center p-4) px-4 py-16 gap-8 justify-between">
	<section class="flex flex-col gap-4">
		<h1 class="font-bold text-5xl text-blue-7">Kevin Falentio</h1>
		<p>
			Hello, I am Kevin Falentio and I am Software Developer. I mainly use<Lang
				href="https://typescriptlang.org"
				logo="i-mdi:language-typescript">Typescript</Lang
			>
			programming language, and also using some other languages likes
			<Lang href="https://go.dev" logo="i-mdi:language-go">Golang</Lang>,
			<Lang href="https://en.wikipedia.org/wiki/JavaScript" logo="i-mdi:language-javascript">
				Javascript
			</Lang>,
			<Lang href="https://en.wikipedia.org/wiki/HTML" logo="i-mdi:language-html5">HTML5</Lang>, and
			<Lang href="https://en.wikipedia.org/wiki/CSS" logo="i-mdi:language-css3">CSS3</Lang>.
		</p>
	</section>
	<Profile imgClass="w-48" class="<md:order-first" />
</div>
<RecentBlog />
<RecentProject />
