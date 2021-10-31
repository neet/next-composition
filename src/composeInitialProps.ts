/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { NextPageContext } from 'next';
import { id } from './utils';

type Gip<T> = (ctx: NextPageContext) => T | Promise<T>;

export type ComposeInitialPropsParams<T extends unknown[], CompositeT, U = CompositeT> = {
  readonly use: T;
  readonly resolver?: (props: CompositeT, context: NextPageContext) => U | Promise<U>;
};

export function composeInitialProps<T0, CompositeT = T0, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, CompositeT = T0 & T1, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, CompositeT = T0 & T1 & T2, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, CompositeT = T0 & T1 & T2 & T3, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, CompositeT = T0 & T1 & T2 & T3 & T4, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, T5, CompositeT = T0 & T1 & T2 & T3 & T4 & T5, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>, Gip<T5>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>, Gip<T5>, Gip<T6>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>, Gip<T5>, Gip<T6>, Gip<T7>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>, Gip<T5>, Gip<T6>, Gip<T7>, Gip<T8>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>, Gip<T5>, Gip<T6>, Gip<T7>, Gip<T8>, Gip<T9>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>, Gip<T5>, Gip<T6>, Gip<T7>, Gip<T8>, Gip<T9>, Gip<T10>], CompositeT, U>): Gip<U>
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, CompositeT = T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11, U = CompositeT>(params: ComposeInitialPropsParams<[Gip<T0>, Gip<T1>, Gip<T2>, Gip<T3>, Gip<T4>, Gip<T5>, Gip<T6>, Gip<T7>, Gip<T8>, Gip<T9>, Gip<T10>, Gip<T11>], CompositeT, U>): Gip<U>
export function composeInitialProps(params: ComposeInitialPropsParams<any[], any, any>): any {
  const { use, resolver = id } = params;

  return async (ctx: NextPageContext) => {
    const props = await Promise.all(use.map((use) => use(ctx)));
    const composition = props.reduce((acc, cur) => Object.assign(acc, cur), {});
    return resolver(composition, ctx);
  }
}
