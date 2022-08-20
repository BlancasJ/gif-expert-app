export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${ process.env.REACT_APP_GIPHY_API_KEY }`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map(img => (
    {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  ));
  return gifs;
};