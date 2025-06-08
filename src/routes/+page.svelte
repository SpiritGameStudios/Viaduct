<script lang="ts">
	let id = $state('');
</script>

<svelte:head>
	<title>Cantilever</title>
</svelte:head>

<div class="flex flex-col items-center gap-4">
	<h2 class="text-center">Add Cantilever to your server</h2>

	<span class="flex flex-row flex-wrap items-center gap-2">
		<input bind:value={id} class="w-fit" placeholder="Application ID" type="text" />
		<button onclick={() => window.location.replace(`/${id}`)}>Go</button>
	</span>
</div>
