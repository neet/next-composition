import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { isNotFound, isProps, isRedirect } from './utils';

type Gsp<T = unknown> = GetStaticProps<T>;
type GspR<T> = GetStaticPropsResult<T>;
type GspC = GetStaticPropsContext;

export function composeStaticProps<T0, U>(
  v0: Gsp<T0>,
  f: (ctx: GspC, r0: T0) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  f: (ctx: GspC, r0: T0, r1: T1) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  f: (ctx: GspC, r0: T0, r1: T1, r2: T2) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, T3, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  f: (ctx: GspC, r0: T0, r1: T1, r2: T2, r3: T3) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, T3, T4, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  f: (ctx: GspC, r0: T0, r1: T1, r2: T2, r3: T3, r4: T4) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, T3, T4, T5, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  v5: Gsp<T5>,
  f: (ctx: GspC, r0: T0, r1: T1, r2: T2, r3: T3, r4: T4, r5: T5) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  v5: Gsp<T5>,
  v6: Gsp<T6>,
  f: (
    ctx: GspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
  ) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  v5: Gsp<T5>,
  v6: Gsp<T6>,
  v7: Gsp<T7>,
  f: (
    ctx: GspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
  ) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  v5: Gsp<T5>,
  v6: Gsp<T6>,
  v7: Gsp<T7>,
  v8: Gsp<T8>,
  f: (
    ctx: GspC,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
    r8: T8,
  ) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  v5: Gsp<T5>,
  v6: Gsp<T6>,
  v7: Gsp<T7>,
  v8: Gsp<T8>,
  v9: Gsp<T9>,
  f: (
    ctx: GspC,
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
  ) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<
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
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  v5: Gsp<T5>,
  v6: Gsp<T6>,
  v7: Gsp<T7>,
  v8: Gsp<T8>,
  v9: Gsp<T9>,
  v10: Gsp<T10>,
  f: (
    ctx: GspC,
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
  ) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<
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
  v0: Gsp<T0>,
  v1: Gsp<T1>,
  v2: Gsp<T2>,
  v3: Gsp<T3>,
  v4: Gsp<T4>,
  v5: Gsp<T5>,
  v6: Gsp<T6>,
  v7: Gsp<T7>,
  v8: Gsp<T8>,
  v9: Gsp<T9>,
  v10: Gsp<T10>,
  v11: Gsp<T11>,
  f: (
    ctx: GspC,
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
  ) => GspR<U>,
): Gsp<U>;
export function composeStaticProps<U>(...args: unknown[]): Gsp<U> {
  const [_f, ...sx] = args.reverse();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const f = _f as any;
  const xs = sx.reverse() as Gsp[];

  return async (
    ctx: GetStaticPropsContext,
  ): Promise<GetStaticPropsResult<U>> => {
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
