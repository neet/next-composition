import { GetServerSidePropsContext } from 'next';
import { composeServerSideProps } from './composeServerSideProps';
import {
  withApple,
  withFacebook,
  withRedirectToFacebook,
  withRedirectToApple,
  withNotFound,
} from './__fixtures__/gssp';

describe('composeServerSideProps', () => {
  test('composes', async () => {
    const getServerSidePops = composeServerSideProps(
      withApple,
      withFacebook,
      (_, v1, v2) => ({
        props: { name: v1.name + ' ' + v2.name },
      }),
    );
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      props: {
        name: 'Apple Facebook',
      },
    });
  });

  test('not found', async () => {
    const getServerSidePops = composeServerSideProps(
      withApple,
      withFacebook,
      withNotFound,
      (_, v1, v2, _v3) => ({
        props: { name: v1.name + ' ' + v2.name },
      }),
    );
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      notFound: true,
    });
  });

  test('redirect', async () => {
    const getServerSidePops = composeServerSideProps(
      withApple,
      withFacebook,
      withRedirectToApple,
      (_, v1, v2, _v3) => ({
        props: { name: v1.name + ' ' + v2.name },
      }),
    );
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://apple.com',
      },
    });
  });

  test('if there are multiple redirects, former one will be prioritized', async () => {
    const getServerSidePops = composeServerSideProps(
      withApple,
      withFacebook,
      withRedirectToFacebook,
      withRedirectToApple,
      (_, v1, v2, _v3) => ({
        props: { name: v1.name + ' ' + v2.name },
      }),
    );
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://facebook.com',
      },
    });
  });
});
