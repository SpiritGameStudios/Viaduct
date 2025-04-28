<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-dvh flex-col">
	<nav class="flex w-full flex-row justify-center border-b">
		<div
			class="flex w-full max-w-[72rem] flex-row items-center justify-center gap-4 p-6 sm:justify-between"
		>
			SNAPPER WEB WIP
		</div>
	</nav>
	<main class="flex w-full flex-auto flex-row items-center justify-center">
		<div class="w-full max-w-[72rem] p-6">
			{@render children()}
		</div>
	</main>
	<footer class="flex w-full flex-row justify-center border-t">
		<div class="w-full max-w-[72rem] p-6">
			<span class="flex flex-row gap-0"> Made with [LOVE] by Spirit Studios. </span>
			<span class="flex flex-row gap-0">
				Image hosting by&nbsp;<a target="_blank" href="https://axolotlclient.com">AxolotlClient</a>.
			</span>
		</div>
	</footer>
</div>
