import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests in useFecthGifs hook', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));
    const { data: images, loading } = result.current;
    await waitForNextUpdate();
    expect(images).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return an array of images and loading false', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Rick and Morty') );
    await waitForNextUpdate();
    const { data: images, loading } = result.current;

    expect(images.length).toBe(10);
    expect(loading).toBe(false);
  });
});