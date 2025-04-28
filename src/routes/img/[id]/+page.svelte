<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<title>{data.image.filename} | Snapper Web</title>

<div class="flex w-full flex-col items-center gap-4">
	<div class="flex flex-col items-center gap-2">
		<span class="text-xl font-bold">{data.image.filename}</span>
		<span class="text-sm"
			>by <a target="_blank" href={`https://namemc.com/profile/${data.creator.name}`}
				>{data.creator.name}</a
			></span
		>
	</div>
	<a class="rounded-xl" target="_blank" href={`/img/${data.id}/raw`}>
		<img
			class="rounded-xl border shadow-2xl"
			draggable="false"
			alt={`Image created by ${data.image.uploader}`}
			src={`data:image;base64,${data.image.file}`}
		/>
	</a>
</div>
