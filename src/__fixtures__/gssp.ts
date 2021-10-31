import { GetServerSideProps } from 'next';

export const withApple: GetServerSideProps<{ name: string }> = async () => {
  return {
    props: {
      name: 'Apple',
      fonder: 'Steve Jobs',
    },
  };
};

export const withFacebook: GetServerSideProps<{ name: string }> = async () => {
  return {
    props: {
      name: 'Facebook',
      fonder: 'Mark Zuckerberg',
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
