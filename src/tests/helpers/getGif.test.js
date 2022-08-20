import { getGifts } from "../../helpers/getGifs";

describe('Tests in getGif helper function', () => {
  test('should bring an array with 10 elements', async () => {
    const gifs = await getGifts('One punch');
    expect(gifs.length).toBe(10);
  });

  test('should bring an array of length 0', async () => {
    const gifs = await getGifts('');
    expect(gifs.length).toBe(0);
  });
});