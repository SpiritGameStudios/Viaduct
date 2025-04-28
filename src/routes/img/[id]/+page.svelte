<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="flex w-full flex-col gap-2">
	image {data.uploader}

	<img alt={`Image created by ${data.uploader}`} src={`data:image;base64,${data.file}`} />
</div>
