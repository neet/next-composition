/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { GetStaticPropsContext, GetStaticProps, PreviewData  } from 'next';
import { isProps, id, ParsedUrlQuery } from './utils';

type Gsp<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = GetStaticProps<P, Q, D>;

export type RevalidateCompositionType = 'min' | 'max';

export type ComposeStaticPropsParams<
  T extends unknown[],
  Q extends ParsedUrlQuery,
  D extends  PreviewData,
  P,
  ResolvedP = P, 
> = {
  readonly use: T;
  readonly resolver?: (props: P, context: GetStaticPropsContext<Q, D>) => ResolvedP | Promise<ResolvedP>;
  readonly revalidate?: number | RevalidateCompositionType;
};

export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, P = T0, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, P = T0 & T1, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, P = T0 & T1 & T2, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, P = T0 & T1 & T2 & T3, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, P = T0 & T1 & T2 & T3 & T4, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, P = T0 & T1 & T2 & T3 & T4 & T5, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>, Gsp<T5, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, P = T0 & T1 & T2 & T3 & T4 & T5 & T6, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>, Gsp<T5, Q, D>, Gsp<T6, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>, Gsp<T5, Q, D>, Gsp<T6, Q, D>, Gsp<T7, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>, Gsp<T5, Q, D>, Gsp<T6, Q, D>, Gsp<T7, Q, D>, Gsp<T8, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>, Gsp<T5, Q, D>, Gsp<T6, Q, D>, Gsp<T7, Q, D>, Gsp<T8, Q, D>, Gsp<T9, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>, Gsp<T5, Q, D>, Gsp<T6, Q, D>, Gsp<T7, Q, D>, Gsp<T8, Q, D>, Gsp<T9, Q, D>, Gsp<T10, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps<Q extends ParsedUrlQuery, D extends PreviewData, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, P = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11, ResolvedP = P>(params: ComposeStaticPropsParams<[Gsp<T0, Q, D>, Gsp<T1, Q, D>, Gsp<T2, Q, D>, Gsp<T3, Q, D>, Gsp<T4, Q, D>, Gsp<T5, Q, D>, Gsp<T6, Q, D>, Gsp<T7, Q, D>, Gsp<T8, Q, D>, Gsp<T9, Q, D>, Gsp<T10, Q, D>, Gsp<T11, Q, D>], Q, D, P, ResolvedP>): Gsp<P, Q, D>
export function composeStaticProps(params: ComposeStaticPropsParams<any[], any, any, any>): Gsp {
  const { use, resolver = id, revalidate = 'min' } = params;

  return async (ctx: GetStaticPropsContext) => {
    const props = await Promise.all(use.map((use) => use(ctx)));

    const firstNotFoundOrRedirect = props.find((x) => !isProps(x));
    if (firstNotFoundOrRedirect != null) {
      return firstNotFoundOrRedirect;
    }

    const composition = props
      .map((v) => v.props)
      .reduce((acc, cur) => Object.assign(acc, cur), {});
    
    const revalidateSecs = props
      .map((v) => v.revalidate)
      .filter((v): v is number => v != null);
    
    const revalidateSec
      = revalidate === 'min' ? Math.min(...revalidateSecs)
      : revalidate === 'max' ? Math.max(...revalidateSecs)
      : revalidate;

    return {
      props: resolver(composition, ctx),
      revalidate: revalidateSec,
    };
  }
}
