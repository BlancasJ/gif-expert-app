export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=JYffbSePDKUXs4njSWROyY5z78AFkIQf`;
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