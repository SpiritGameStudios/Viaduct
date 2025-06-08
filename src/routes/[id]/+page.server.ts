import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	redirect(
		303,
		'https://discord.com/oauth2/authorize?scope=bot+applications.commands&client_id=' + params.id
	);
};
