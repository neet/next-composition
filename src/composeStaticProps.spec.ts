import { GetStaticPropsContext } from 'next';
import { composeStaticProps } from './composeStaticProps';
import {
  withApple,
  withFacebook,
  withRedirectToFacebook,
  withRedirectToApple,
  withNotFound,
} from './__fixtures__/gsp';

describe('composeStaticProps', () => {
  test('test', async () => {
    const getStaticProps = composeStaticProps(
      withApple,
      withFacebook,
      (_, r0, r1) => ({
        props: {
          name: r0.name + ' ' + r1.name,
        },
        revalidate: 2000,
      }),
    );
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      props: {
        name: 'Apple Facebook',
      },
      revalidate: 2000,
    });
  });

  test('not found', async () => {
    const getStaticProps = composeStaticProps(
      withApple,
      withFacebook,
      withNotFound,
      () => ({ props: {} }),
    );
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      notFound: true,
      revalidate: 1000,
    });
  });

  test('redirect', async () => {
    const getStaticProps = composeStaticProps(
      withApple,
      withRedirectToApple,
      () => ({ props: {} }),
    );
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://apple.com',
      },
      revalidate: 1000,
    });
  });

  test('if there are multiple redirects, former one will be prioritized', async () => {
    const getStaticProps = composeStaticProps(
      withApple,
      withRedirectToFacebook,
      withRedirectToApple,
      () => ({ props: {} }),
    );
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://facebook.com',
      },
      revalidate: 1000,
    });
  });
});
