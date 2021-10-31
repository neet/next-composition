import { Redirect, GetServerSidePropsResult } from 'next';

type RedirectResult = { redirect: Redirect };
type NotFoundResult = { notFound: true };
type PropsResult<T> = { props: T };

export const isNotFound = <T>(
  result: GetServerSidePropsResult<T>,
): result is NotFoundResult => {
  return 'notFound' in result && result.notFound;
};

export const isRedirect = <T>(
  result: GetServerSidePropsResult<T>,
): result is RedirectResult => {
  return 'redirect' in result;
};

export const isProps = <T>(
  result: GetServerSidePropsResult<T>,
): result is PropsResult<T> => {
  return 'props' in result;
};

export const id = <T>(x: T): T => x;
