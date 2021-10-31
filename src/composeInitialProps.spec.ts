import { NextPageContext } from 'next';
import { composeInitialProps } from './composeInitialProps';

describe('composeInitialProps', () => {
  test('compose', async () => {
    const getInitialProps = composeInitialProps(
      async () => ({ title: 'Silent Spring' }),
      async () => ({ author: 'Rachel Carson' }),
      (_context, { title }, { author }) => ({
        title,
        author,
      }),
    );

    const props = await getInitialProps({} as NextPageContext);
    expect(props).toEqual({
      title: 'Silent Spring',
      author: 'Rachel Carson',
    });
  });
});
