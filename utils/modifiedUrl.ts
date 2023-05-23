export function modifiedUrl(url: string) {
	const modifiedUrl = url.split("?")[0];
	return modifiedUrl;
}
