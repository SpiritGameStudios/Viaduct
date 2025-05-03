<script lang="ts">
	import { formatTime, getImageBlob } from '$lib';
	import HairlineSeparator from '$lib/ui/HairlineSeparator.svelte';
	import { CopyIcon, LinkIcon, ShareIcon } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import Tooltip from 'sv-tooltip';
	import { browser } from '$app/environment';

	function copyImage() {
		if (browser) {
			try {
				navigator.clipboard.write([
					new ClipboardItem({
						'image/png': getImageBlob(data.image.file)
					})
				]);
			} catch (error) {
				console.error('Failed to copy image to clipboard');
			}
		}
	}

	function canShare() {
		if (browser) {
			return navigator.canShare();
		}
		return false;
	}

	function shareImage() {
		if (browser) {
			try {
				if (!canShare()) throw new Error();
				navigator.share({
					url: `https://snapper.spiritstudios.dev/img/${data.id}`,
					title: `${data.image.filename} on Snapper Web`,
					text: `Image shared at ${formatTime(new Date(data.image.shared_at))} via Snapper`,
					files: [
						new File([getImageBlob(data.image.file)], data.image.filename, {
							type: 'image/png'
						})
					]
				});
			} catch {
				console.log('Share functionality unavailable in your browser or operating system.');
			}
		}
	}

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

<div class="flex w-full flex-col items-center gap-4">
	<div class="flex flex-col items-center gap-2">
		<span class="text-xl font-bold">{data.image.filename}</span>
		{#if data.creator.uuid}
			<span class="flex flex-col flex-wrap items-center gap-1 text-sm sm:flex-row sm:gap-4">
				<span class="flex flex-row flex-wrap items-center gap-1">
					by
					<a
						draggable="false"
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
	<a draggable="false" class="rounded-xl" target="_blank" href={`/img/${data.id}/raw`}>
		<img
			class="pixelated rounded-xl border shadow-2xl"
			draggable="false"
			alt={`Image created by ${data.image.uploader}`}
			src={`data:image;base64,${data.image.file}`}
		/>
	</a>
	<div class="grid grid-cols-3 items-center gap-2">
		<Tooltip class="tooltip-spirit" tip="Copy image">
			<button onclick={copyImage}>
				<CopyIcon />
			</button>
		</Tooltip>
		<Tooltip class="tooltip-spirit" tip="Copy URL">
			<button>
				<LinkIcon
					onclick={() => {
						if (browser) {
							navigator.clipboard.writeText(`https://snapper.spiritstudios.dev/img/${data.id}`);
						}
					}}
				/>
			</button>
		</Tooltip>
		<Tooltip
			class="tooltip-spirit"
			tip={`${canShare() ? 'Share image' : 'Browser does not support sharing'}`}
		>
			{#if canShare()}
				<button>
					<ShareIcon onclick={shareImage} />
				</button>
			{:else}
				<button>
					<ShareIcon class="text-brand-disabled" onclick={shareImage} />
				</button>
			{/if}
		</Tooltip>
	</div>
</div>
