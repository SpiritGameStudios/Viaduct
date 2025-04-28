import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PictureData } from '$lib/types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	let imageData = await fetch(`https://api.axolotlclient.com/v1/image/${params.id}`, {
		mode: 'no-cors'
	})
		.then((response) => response.json())
		.catch(() => error(404, 'Not found'));

	return imageData as PictureData;
};
