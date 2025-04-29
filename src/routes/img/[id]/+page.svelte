<script lang="ts">
	import { formatTime } from '$lib';
	import HairlineSeparator from '$lib/ui/HairlineSeparator.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<title>{data.image.filename} | Snapper Web</title>
<meta name="title" content={`${data.image.filename} on Snapper Web`} />
<meta
	name="description"
	content={`Image shared at ${formatTime(new Date(data.image.shared_at))} via Snapper`}
/>
<meta name="author" content={data.creator.username} />
<meta property="og:image" content={`/img/${data.id}/raw`} />
<meta property="twitter:card" content="summary_large_image" />
<meta name="theme-color" content="#2b39fe" />

<div class="flex w-full flex-col items-center gap-4">
	<div class="flex flex-col items-center gap-2">
		<span class="text-xl font-bold">{data.image.filename}</span>
		{#if data.creator.uuid}
			<span class="flex flex-col flex-wrap items-center gap-1 text-sm sm:flex-row sm:gap-4">
				<span class="flex flex-row flex-wrap items-center gap-1">
					by
					<a
						class="pixelated flex flex-row flex-wrap items-center gap-2"
						target="_blank"
						href={`https://namemc.com/profile/${data.creator.username}`}
					>
						<span>
							{data.creator.username}
						</span>
						<img
							class="h-4 w-4"
							draggable="false"
							alt={`Minecraft skin head texture of creator of screenshot, ${data.creator.username}`}
							src={`https://vzge.me/face/512/${data.creator.username}.png`}
						/>
					</a>
				</span>
				<span class="hidden sm:flex">
					<HairlineSeparator />
				</span>
				<span>Shared {formatTime(new Date(data.image.shared_at))}</span>
			</span>
		{/if}
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
