const getCroppedImageUrl = (url: string) => {
	const temp_url = url.split("media/");
	return `${temp_url[0]}media/crop/600/400/${temp_url[1]}`;
};

export default getCroppedImageUrl;
