export const spiritHeaders = {
	'User-Agent': 'spiritgamestudios/snapperweb by Spirit Studios, hello@worldwidepixel.ca',
	'Content-Type': 'application/json'
};

export const formatTime = (time: Date) => {
	const TIME_FORMAT = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' });
	return TIME_FORMAT.format(time);
};
