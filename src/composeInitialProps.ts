import { NextPageContext } from 'next';

type Gip<T = unknown> = (ctx: NextPageContext) => T | Promise<T>;
type GipR<T> = T;
type Npc = NextPageContext;

export function composeInitialProps<T0, U>(
  v0: Gip<T0>,
  f: (ctx: Npc, r0: T0) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  f: (ctx: Npc, r0: T0, r1: T1) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  f: (ctx: Npc, r0: T0, r1: T1, r2: T2) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, T3, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  f: (ctx: Npc, r0: T0, r1: T1, r2: T2, r3: T3) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, T3, T4, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  f: (ctx: Npc, r0: T0, r1: T1, r2: T2, r3: T3, r4: T4) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, T3, T4, T5, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  v5: Gip<T5>,
  f: (ctx: Npc, r0: T0, r1: T1, r2: T2, r3: T3, r4: T4, r5: T5) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  v5: Gip<T5>,
  v6: Gip<T6>,
  f: (
    ctx: Npc,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
  ) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  v5: Gip<T5>,
  v6: Gip<T6>,
  v7: Gip<T7>,
  f: (
    ctx: Npc,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
  ) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  v5: Gip<T5>,
  v6: Gip<T6>,
  v7: Gip<T7>,
  v8: Gip<T8>,
  f: (
    ctx: Npc,
    r0: T0,
    r1: T1,
    r2: T2,
    r3: T3,
    r4: T4,
    r5: T5,
    r6: T6,
    r7: T7,
    r8: T8,
  ) => GipR<U>,
): Gip<U>;
export function composeInitialProps<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  v5: Gip<T5>,
  v6: Gip<T6>,
  v7: Gip<T7>,
  v8: Gip<T8>,
  v9: Gip<T9>,
  f: (
    ctx: Npc,
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
  ) => GipR<U>,
): Gip<U>;
export function composeInitialProps<
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
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  v5: Gip<T5>,
  v6: Gip<T6>,
  v7: Gip<T7>,
  v8: Gip<T8>,
  v9: Gip<T9>,
  v10: Gip<T10>,
  f: (
    ctx: Npc,
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
  ) => GipR<U>,
): Gip<U>;
export function composeInitialProps<
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
  v0: Gip<T0>,
  v1: Gip<T1>,
  v2: Gip<T2>,
  v3: Gip<T3>,
  v4: Gip<T4>,
  v5: Gip<T5>,
  v6: Gip<T6>,
  v7: Gip<T7>,
  v8: Gip<T8>,
  v9: Gip<T9>,
  v10: Gip<T10>,
  v11: Gip<T11>,
  f: (
    ctx: Npc,
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
  ) => GipR<U>,
): Gip<U>;
export function composeInitialProps<U>(...args: unknown[]): Gip<U> {
  const [_f, ...sx] = args.reverse();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const f = _f as any;
  const xs = sx.reverse() as Gip[];

  return async (ctx: NextPageContext): Promise<U> => {
    const args = await Promise.all(xs.map((value) => value(ctx)));
    const props = await Promise.all(args);
    return f(ctx, ...props);
  };
}
