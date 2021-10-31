import { GetStaticProps } from 'next';

type Company = { name: string; founder: string };

export const withCompany: GetStaticProps<{ company: Company }> = async () => {
  return {
    props: {
      company: {
        name: 'Apple',
        founder: 'Steve Jobs',
      },
    },
    revalidate: 30,
  };
};

type Book = { title: string; author: string };

export const withBook: GetStaticProps<{ book: Book }> = async () => {
  return {
    props: {
      book: {
        title: 'Silent Spring',
        author: 'Rachel Carson',
      },
    },
    revalidate: 60,
  };
};

export const withNotFound: GetStaticProps<never> = async () => {
  return {
    notFound: true,
  };
};

export const withRedirectToApple: GetStaticProps<never> = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: 'https://apple.com',
    },
    revalidate: 60,
  };
};

export const withRedirectToFacebook: GetStaticProps<never> = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: 'https://facebook.com',
    },
    revalidate: 60,
  };
};
