import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PictureData, UserData } from '$lib/types';
import { spiritHeaders } from '$lib';

export const load: PageServerLoad = async ({ fetch, params }) => {
	let imageData = await fetch(`https://api.axolotlclient.com/v1/image/${params.id}`, {
		mode: 'no-cors',
		headers: spiritHeaders
	})
		.then((response) => response.json())
		.catch(() => error(404, 'Not found'));

	let usernameData = { id: null, name: null };
	try {
		usernameData = await fetch(`https://api.ashcon.app/mojang/v2/user/${imageData.uploader}`, {
			mode: 'no-cors',
			headers: spiritHeaders
		}).then((response) => response.json());
	} catch {}

	let userData = await fetch(`https://api.ashcon.app/mojang/v2/user/${imageData.uploader}`, {
		mode: 'no-cors',
		headers: spiritHeaders
	})
		.then((response) => response.json())
		.catch(() => error(404, 'Failed to recieve creator data, please contact support.'));

	return {
		image: imageData as PictureData,
		creator: userData as UserData,
		id: params.id
	};
};
