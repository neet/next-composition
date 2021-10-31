import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { isNotFound, isProps, isRedirect } from './utils';

type Gssp<T = unknown> = GetServerSideProps<T>;
type GsspR<T> = GetServerSidePropsResult<T>;
type GsspC = GetServerSidePropsContext;

export function composeServerSideProps<T0, U>(
  v0: Gssp<T0>,
  f: (ctx: GsspC, r0: T0) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  f: (ctx: GsspC, r0: T0, r1: T1) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, T2, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  f: (ctx: GsspC, r0: T0, r1: T1, r2: T2) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, T2, T3, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  f: (ctx: GsspC, r0: T0, r1: T1, r2: T2, r3: T3) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, T2, T3, T4, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  f: (ctx: GsspC, r0: T0, r1: T1, r2: T2, r3: T3, r4: T4) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  v5: Gssp<T5>,
  f: (ctx: GsspC, r0: T0, r1: T1, r2: T2, r3: T3, r4: T4, r5: T5) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  v5: Gssp<T5>,
  v6: Gssp<T6>,
  f: (
    ctx: GsspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
  ) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, T7, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  v5: Gssp<T5>,
  v6: Gssp<T6>,
  v7: Gssp<T7>,
  f: (
    ctx: GsspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
  ) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, U>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  v5: Gssp<T5>,
  v6: Gssp<T6>,
  v7: Gssp<T7>,
  v8: Gssp<T8>,
  f: (
    ctx: GsspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
    r8: T8,
  ) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  U,
>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  v5: Gssp<T5>,
  v6: Gssp<T6>,
  v7: Gssp<T7>,
  v8: Gssp<T8>,
  v9: Gssp<T9>,
  f: (
    ctx: GsspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
    r8: T8,
    r9: T9,
  ) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  U,
>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  v5: Gssp<T5>,
  v6: Gssp<T6>,
  v7: Gssp<T7>,
  v8: Gssp<T8>,
  v9: Gssp<T9>,
  v10: Gssp<T10>,
  f: (
    ctx: GsspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
    r8: T8,
    r9: T9,
    r10: T10,
  ) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<
  T0,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  U,
>(
  v0: Gssp<T0>,
  v1: Gssp<T1>,
  v2: Gssp<T2>,
  v3: Gssp<T3>,
  v4: Gssp<T4>,
  v5: Gssp<T5>,
  v6: Gssp<T6>,
  v7: Gssp<T7>,
  v8: Gssp<T8>,
  v9: Gssp<T9>,
  v10: Gssp<T10>,
  v11: Gssp<T11>,
  f: (
    ctx: GsspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
    r8: T8,
    r9: T9,
    r10: T10,
    r11: T11,
  ) => GsspR<U>,
): Gssp<U>;
export function composeServerSideProps<U>(...args: unknown[]): Gssp<U> {
  const [_f, ...sx] = args.reverse();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const f = _f as any;
  const xs = sx.reverse() as Gssp[];

  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<U>> => {
    const args = await Promise.all(xs.map((value) => value(ctx)));

    const notFound = args.find(isNotFound);
    if (notFound != null) {
      return notFound;
    }

    const redirect = args.find(isRedirect);
    if (redirect != null) {
      return redirect;
    }

    const props = await Promise.all(
      args.filter(isProps).map((arg) => arg.props),
    );
    return f(ctx, ...props);
  };
}
