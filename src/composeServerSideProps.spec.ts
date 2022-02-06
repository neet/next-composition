import { GetServerSidePropsContext } from 'next';
import { composeServerSideProps } from './composeServerSideProps';
import {
  withBook,
  withCompany,
  withRedirectToFacebook,
  withRedirectToApple,
  withNotFound,
} from './__fixtures__/gssp';

describe('composeServerSideProps', () => {
  test('composition', async () => {
    const getServerSidePops = composeServerSideProps({
      use: [withBook, withCompany],
    });
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
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
    });
  });

  test('interpolation', async () => {
    const getServerSidePops = composeServerSideProps({
      use: [withBook, withCompany],
      resolver: (props) => ({
        name: props.book.author + ' ' + props.company.founder,
      }),
    });
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      props: {
        name: 'Rachel Carson Steve Jobs',
      },
    });
  });

  test('not found', async () => {
    const getServerSidePops = composeServerSideProps({
      use: [withBook, withCompany, withNotFound],
    });
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      notFound: true,
    });
  });

  test('redirect', async () => {
    const getServerSidePops = composeServerSideProps({
      use: [withBook, withCompany, withRedirectToApple],
    });
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://apple.com',
      },
    });
  });

  test('if there are multiple redirects, former one will be prioritized', async () => {
    const getServerSidePops = composeServerSideProps({
      use: [withBook, withCompany, withRedirectToFacebook, withRedirectToApple],
    });
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://facebook.com',
      },
    });
  });

  test('if notFound and redirects are mixed, former one will be prioritized', async () => {
    const getServerSidePops = composeServerSideProps({
      use: [withRedirectToFacebook, withNotFound, withRedirectToApple],
    });
    const result = await getServerSidePops({} as GetServerSidePropsContext);

    expect(result).toEqual({
      redirect: {
        statusCode: 302,
        destination: 'https://facebook.com',
      },
    });
  });
});
