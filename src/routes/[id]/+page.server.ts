import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	if (params.id.length >= 18 && params.id.length <= 20) {
		redirect(
			303,
			'https://discord.com/oauth2/authorize?scope=bot+applications.commands&permissions=536938496&client_id=' + params.id
		);
	} else {
		redirect(303, '/');
	}
};
