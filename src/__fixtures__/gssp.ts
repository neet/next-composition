import { GetServerSideProps } from 'next';

type Company = { name: string; founder: string };

export const withCompany: GetServerSideProps<{
  company: Company;
}> = async () => {
  return {
    props: {
      company: {
        name: 'Apple',
        founder: 'Steve Jobs',
      },
    },
  };
};

type Book = { title: string; author: string };

export const withBook: GetServerSideProps<{ book: Book }> = async () => {
  return {
    props: {
      book: {
        title: 'Silent Spring',
        author: 'Rachel Carson',
      },
    },
  };
};

export const withNotFound: GetServerSideProps<never> = async () => {
  return {
    notFound: true,
  };
};

export const withRedirectToApple: GetServerSideProps<never> = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: 'https://apple.com',
    },
  };
};

export const withRedirectToFacebook: GetServerSideProps<never> = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: 'https://facebook.com',
    },
  };
};
