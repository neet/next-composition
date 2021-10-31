import { Account } from '../models/account';
import { GetServerSideProps } from 'next';

export type WithAccountProps = {
  account: Account;
};

export const withAccount: GetServerSideProps<WithAccountProps> = async () => {
  const json = (await (await fetch('/account')).json()) as Account;

  if (!json) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      account: json,
    },
  };
};
