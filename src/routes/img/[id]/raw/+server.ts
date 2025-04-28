import { spiritHeaders } from '$lib';
import type { PictureData } from '$lib/types';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	let imageData: PictureData = await fetch(`https://api.axolotlclient.com/v1/image/${params.id}`, {
		mode: 'no-cors',
		headers: spiritHeaders
	})
		.then((response) => response.json())
		.catch(() => error(404, 'Not found'));

	const imageByteString = atob(imageData.file);
	const imageArrayBuffer = new ArrayBuffer(imageByteString.length);
	const imageIntArray = new Uint8Array(imageArrayBuffer);
	for (let i = 0; i < imageByteString.length; i++) {
		imageIntArray[i] = imageByteString.charCodeAt(i);
	}
	const imageBlob = new Blob([imageIntArray], { type: 'image/png' });

	const response = new Response(imageBlob, {
		headers: {
			'Content-Type': 'image/png',
			'Content-Length': imageBlob.size.toString()
		}
	});

	return response;
};

/*
export const load: PageServerLoad = async ({ fetch, params }) => {

	return {
		image: imageData as PictureData,
		id: params.id
	};
};
*/
