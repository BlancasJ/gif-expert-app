import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Tests in GifGridItem', () => {
  const title = 'One Punch Man';
  const url = 'https://media4.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=da2f845e2y7qk5or0ob5qgkwccppdh5v5xduh22van8xm9xb&rid=giphy.gif&ct=g';
  const wrapper = shallow(
    <GifGridItem
      title={ title }
      url={ url }
    />
  );

  test('should show GifGridItem component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have title inside paragraph tab', () => {
    const p = wrapper.find('p');
    const paragraphText = p.text().trim();
    expect(paragraphText).toBe(title);
  });

  test('should have url and alt equal to props', () => {
    const img = wrapper.find('img');
    const { src, alt } = img.props();
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should have animate__bounce className', () => {
    const div = wrapper.find('div');
    const { className } = div.props();
    expect(className.includes('animate__bounce')).toBe(true);
  });
});
