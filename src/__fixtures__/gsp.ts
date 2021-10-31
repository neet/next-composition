import { GetStaticProps } from 'next';

export const withApple: GetStaticProps<{ name: string }> = async () => {
  return {
    props: {
      name: 'Apple',
      fonder: 'Steve Jobs',
    },
    revalidate: 1000,
  };
};

export const withFacebook: GetStaticProps<{ name: string }> = async () => {
  return {
    props: {
      name: 'Facebook',
      fonder: 'Mark Zuckerberg',
    },
    revalidate: 1000,
  };
};

export const withNotFound: GetStaticProps<never> = async () => {
  return {
    notFound: true,
    revalidate: 1000,
  };
};

export const withRedirectToApple: GetStaticProps<never> = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: 'https://apple.com',
    },
    revalidate: 1000,
  };
};

export const withRedirectToFacebook: GetStaticProps<never> = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: 'https://facebook.com',
    },
    revalidate: 1000,
  };
};
