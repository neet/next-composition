import { NextPageContext } from 'next';
import { composeInitialProps } from './composeInitialProps';

describe('composeInitialProps', () => {
  test('composition', async () => {
    const getInitialProps = composeInitialProps({
      use: [
        async () => ({ title: 'Silent Spring' }),
        async () => ({ author: 'Rachel Carson' }),
      ],
    });

    const props = await getInitialProps({} as NextPageContext);
    expect(props).toEqual({
      title: 'Silent Spring',
      author: 'Rachel Carson',
    });
  });

  test('interpolation', async () => {
    const getInitialProps = composeInitialProps({
      use: [
        async () => ({ title: 'Silent Spring' }),
        async () => ({ author: 'Rachel Carson' }),
      ],
      resolver: (props) => ({
        name: props.title + ' by ' + props.author,
      }),
    });

    const props = await getInitialProps({} as NextPageContext);
    expect(props).toEqual({
      name: 'Silent Spring by Rachel Carson',
    });
  });
});
