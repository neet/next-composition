import { GetStaticPropsContext } from 'next';
import { composeStaticProps } from './composeStaticProps';
import {
  withBook,
  withCompany,
  withRedirectToFacebook,
  withRedirectToApple,
  withNotFound,
} from './__fixtures__/gsp';

describe('composeStaticProps', () => {
  test('composition', async () => {
    const getStaticProps = composeStaticProps({
      use: [withBook, withCompany],
      revalidate: 2000,
    });
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      props: {
        company: {
          name: 'Apple',
          founder: 'Steve Jobs',
        },
        book: {
          title: 'Silent Spring',
          author: 'Rachel Carson',
        },
      },
      revalidate: 2000,
    });
  });

  test('interpolation', async () => {
    const getServerSidePops = composeStaticProps({
      use: [withBook, withCompany],
      resolver: (props) => ({
        name: props.book.author + ' ' + props.company.founder,
      }),
    });
    const result = await getServerSidePops({} as GetStaticPropsContext);

    expect(result).toEqual({
      props: {
        name: 'Rachel Carson Steve Jobs',
      },
      revalidate: 30,
    });
  });

  test('min', async () => {
    const getStaticProps = composeStaticProps({
      use: [withBook, withCompany],
      revalidate: 'min',
    });
    const props = await getStaticProps({} as GetStaticPropsContext);
    expect(props.revalidate).toEqual(30);
  });

  test('max', async () => {
    const getStaticProps = composeStaticProps({
      use: [withBook, withCompany],
      revalidate: 'max',
    });
    const props = await getStaticProps({} as GetStaticPropsContext);
    expect(props.revalidate).toEqual(60);
  });

  test('not found', async () => {
    const getStaticProps = composeStaticProps({
      use: [withBook, withCompany, withNotFound],
      revalidate: 1000,
    });
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      notFound: true,
      // revalidate: 1000,
    });
  });

  test('redirect', async () => {
    const getStaticProps = composeStaticProps({
      use: [withBook, withRedirectToApple],
    });
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://apple.com',
      },
      revalidate: 60,
    });
  });

  test('if there are multiple redirects, former one will be prioritized', async () => {
    const getStaticProps = composeStaticProps({
      use: [withBook, withRedirectToFacebook, withRedirectToApple],
    });
    const props = await getStaticProps({} as GetStaticPropsContext);

    expect(props).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://facebook.com',
      },
      revalidate: 60,
    });
  });
});
