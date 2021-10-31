/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { isNotFound, isRedirect, id } from './utils';

type Gssp<T> = GetServerSideProps<T>;

export type ComposeServerSidePropsParams<T extends unknown[], CompositeT, U = CompositeT> = {
  readonly use: T;
  readonly resolver?: (props: CompositeT, context: GetServerSidePropsContext) => U | Promise<U>;
};

export function composeServerSideProps<T0, CompositeT = T0, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, CompositeT = T0 & T1, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, CompositeT = T0 & T1 & T2, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, CompositeT = T0 & T1 & T2 & T3, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, CompositeT = T0 & T1 & T2 & T3 & T4, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, CompositeT = T0 & T1 & T2 & T3 & T4 & T5, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>, Gssp<T5>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>, Gssp<T5>, Gssp<T6>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, T7, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>, Gssp<T5>, Gssp<T6>, Gssp<T7>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>, Gssp<T5>, Gssp<T6>, Gssp<T7>, Gssp<T8>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>, Gssp<T5>, Gssp<T6>, Gssp<T7>, Gssp<T8>, Gssp<T9>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>, Gssp<T5>, Gssp<T6>, Gssp<T7>, Gssp<T8>, Gssp<T9>, Gssp<T10>], CompositeT, U>): Gssp<U>
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11, U = CompositeT>(params: ComposeServerSidePropsParams<[Gssp<T0>, Gssp<T1>, Gssp<T2>, Gssp<T3>, Gssp<T4>, Gssp<T5>, Gssp<T6>, Gssp<T7>, Gssp<T8>, Gssp<T9>, Gssp<T10>, Gssp<T11>], CompositeT, U>): Gssp<U>
export function composeServerSideProps(params: ComposeServerSidePropsParams<any[], any, any>): Gssp<any> {
  const { use, resolver = id } = params;

  return async (ctx: GetServerSidePropsContext) => {
    const props = await Promise.all(use.map((use) => use(ctx)));

    const notFound = props.find(isNotFound);
    if (notFound != null) return notFound;

    const redirect = props.find(isRedirect);
    if (redirect != null) return redirect;

    const composition = props
      .map((v) => v.props)
      .reduce((acc, cur) => Object.assign(acc, cur), {});

    return {
      props: resolver(composition, ctx),
    };
  }
}
