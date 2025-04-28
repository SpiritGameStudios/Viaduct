<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-dvh flex-col">
	<nav class="flex w-full flex-row justify-center border-b">
		<div
			class="flex w-full max-w-[72rem] flex-row items-center justify-center gap-4 p-6 sm:justify-between"
		>
			<span class="flex flex-row items-center gap-4 text-xl font-bold tracking-tight">
				<img draggable="false" class="h-8 w-8 rounded-md" alt="Snapper logo" src="/snapper.png" />
				Snapper Web
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
			<span class="flex flex-row items-center gap-3">
				<span class="flex flex-row gap-0">
					Image hosting by&nbsp;<a target="_blank" href="https://axolotlclient.com">AxolotlClient</a
					>.
				</span>
				<span class="bg-brand-border h-5 w-[1px]"></span>
				<a target="_blank" href="https://axolotlclient.com/tos">Terms</a>
				<span class="bg-brand-border h-5 w-[1px]"></span>
				<a target="_blank" href="https://axolotlclient.com/privacy">Privacy</a>
			</span>
		</div>
	</footer>
</div>
