import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PictureData } from '$lib/types';
import { spiritHeaders } from '$lib';

export const load: PageServerLoad = async ({ fetch, params }) => {
	let imageData = await fetch(`https://api.axolotlclient.com/v1/image/${params.id}`, {
		mode: 'no-cors',
		headers: spiritHeaders
	})
		.then((response) => response.json())
		.catch(() => error(404, 'Not found'));

	let usernameData = await fetch(
		`https://api.minecraftservices.com/minecraft/profile/lookup/${imageData.uploader}`,
		{
			mode: 'no-cors',
			headers: spiritHeaders
		}
	).then((response) => response.json());

	return {
		image: imageData as PictureData,
		creator: usernameData as { id: string; name: string },
		id: params.id
	};
};
