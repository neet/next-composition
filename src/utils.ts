import { GetServerSidePropsResult } from 'next';

type PropsResult<T> = { props: T };

export const isProps = <T>(
  result: GetServerSidePropsResult<T>,
): result is PropsResult<T> => {
  return 'props' in result;
};

export const id = <T>(x: T): T => x;

export type ParsedUrlQuery = Record<string, string | string[] | undefined>;
