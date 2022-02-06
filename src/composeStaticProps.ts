/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { GetStaticPropsContext, GetStaticProps } from 'next';
import { isProps, id } from './utils';

type Gsp<T> = GetStaticProps<T>;

export type RevalidateCompositionType = 'min' | 'max';

export type ComposeStaticPropsParams<T extends unknown[], CompositeT, U = CompositeT> = {
  readonly use: T;
  readonly resolver?: (props: CompositeT, context: GetStaticPropsContext) => U | Promise<U>;
  readonly revalidate?: number | RevalidateCompositionType;
};

export function composeStaticProps<T0, CompositeT = T0, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, CompositeT = T0 & T1, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, CompositeT = T0 & T1 & T2, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, CompositeT = T0 & T1 & T2 & T3, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, CompositeT = T0 & T1 & T2 & T3 & T4, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, T5, CompositeT = T0 & T1 & T2 & T3 & T4 & T5, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>, Gsp<T5>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>, Gsp<T5>, Gsp<T6>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>, Gsp<T5>, Gsp<T6>, Gsp<T7>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>, Gsp<T5>, Gsp<T6>, Gsp<T7>, Gsp<T8>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>, Gsp<T5>, Gsp<T6>, Gsp<T7>, Gsp<T8>, Gsp<T9>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>, Gsp<T5>, Gsp<T6>, Gsp<T7>, Gsp<T8>, Gsp<T9>, Gsp<T10>], CompositeT, U>): Gsp<U>
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11, U = CompositeT>(params: ComposeStaticPropsParams<[Gsp<T0>, Gsp<T1>, Gsp<T2>, Gsp<T3>, Gsp<T4>, Gsp<T5>, Gsp<T6>, Gsp<T7>, Gsp<T8>, Gsp<T9>, Gsp<T10>, Gsp<T11>], CompositeT, U>): Gsp<U>
export function composeStaticProps(params: ComposeStaticPropsParams<any[], any, any>): Gsp<any> {
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
