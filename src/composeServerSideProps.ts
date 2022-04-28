/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import { id, isProps, ParsedUrlQuery } from './utils';

type Gssp<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = GetServerSideProps<P, Q, D>;

export type ComposeServerSidePropsParams<
  T extends unknown[],
  Q extends ParsedUrlQuery,
  D extends  PreviewData,
  P,
  ResolvedP = P, 
> = {
  readonly use: T;
  readonly resolver?: (props: P, context: GetServerSidePropsContext<Q, D>) => ResolvedP | Promise<ResolvedP>;
};

export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, P = T0, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, P = T0 & T1, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, P = T0 & T1 & T2, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, P = T0 & T1 & T2 & T3, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, P = T0 & T1 & T2 & T3 & T4, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, P = T0 & T1 & T2 & T3 & T4 & T5, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>, Gssp<T5, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, P = T0 & T1 & T2 & T3 & T4 & T5 & T6, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>, Gssp<T5, Q, D>, Gssp<T6, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>, Gssp<T5, Q, D>, Gssp<T6, Q, D>, Gssp<T7, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>, Gssp<T5, Q, D>, Gssp<T6, Q, D>, Gssp<T7, Q, D>, Gssp<T8, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>, Gssp<T5, Q, D>, Gssp<T6, Q, D>, Gssp<T7, Q, D>, Gssp<T8, Q, D>, Gssp<T9, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>, Gssp<T5, Q, D>, Gssp<T6, Q, D>, Gssp<T7, Q, D>, Gssp<T8, Q, D>, Gssp<T9, Q, D>, Gssp<T10, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11, ResolvedP = P>(params: ComposeServerSidePropsParams<[Gssp<T0, Q, D>, Gssp<T1, Q, D>, Gssp<T2, Q, D>, Gssp<T3, Q, D>, Gssp<T4, Q, D>, Gssp<T5, Q, D>, Gssp<T6, Q, D>, Gssp<T7, Q, D>, Gssp<T8, Q, D>, Gssp<T9, Q, D>, Gssp<T10, Q, D>, Gssp<T11, Q, D>], Q, D, P, ResolvedP>): Gssp<P, Q, D>
export function composeServerSideProps(params: ComposeServerSidePropsParams<any[], any, any, any>): Gssp {
  const { use, resolver = id } = params;

  return async (ctx: GetServerSidePropsContext) => {
    const props = await Promise.all(use.map((use) => use(ctx)));

    const firstNotFoundOrRedirect = props.find((x) => !isProps(x));
    if (firstNotFoundOrRedirect != null) {
      return firstNotFoundOrRedirect;
    }

    const composition = props
      .map((v) => v.props)
      .reduce((acc, cur) => Object.assign(acc, cur), {});

    return {
      props: resolver(composition, ctx),
    };
  }
}
