<script lang="ts">
	import HairlineSeparator from '$lib/ui/HairlineSeparator.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#8400ff" />
</svelte:head>

<div class="flex h-dvh flex-col">
	<nav class="flex w-full flex-row justify-center border-b">
		<div
			class="flex w-full max-w-[72rem] flex-row items-center justify-center gap-4 p-6 sm:justify-between"
		>
			<span class="flex flex-row items-center gap-4 text-xl font-bold tracking-tight">
				<img
					draggable="false"
					class="h-8 w-8 rounded-md"
					alt="Cantilever logo"
					src="/cantilever.png"
				/>
				Cantilever
			</span>
		</div>
	</nav>
	<main class="flex w-full flex-auto flex-row items-center justify-center">
		<div class="w-full max-w-[72rem] p-6">
			{@render children()}
		</div>
	</main>
	<footer class="flex w-full flex-row justify-center border-t">
		<div class="flex w-full max-w-[72rem] flex-col items-center p-6 text-sm">
			<span class="flex flex-row gap-0">
				Made with &lt;3 by&nbsp;<a target="_blank" href="https://spiritstudios.dev"
					>Spirit Studios</a
				>.
			</span>
		</div>
	</footer>
</div>
