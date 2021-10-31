# next-composition

[![npm](https://img.shields.io/npm/v/next-composition.svg)](https://www.npmjs.com/package/next-composition)
[![CI](https://github.com/neet/next-composition/actions/workflows/ci.yml/badge.svg)](https://github.com/neet/next-composition/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/neet/next-composition/branch/main/graph/badge.svg?token=CZEL31RG9D)](https://codecov.io/gh/neet/next-composition)

Next.js utility for reusing *getServerSideProps*, *getStaticProps* and *getInitialProps* logics.

- [Examples](https://github.com/neet/next-composition/tree/main/examples)

## Install

You can install it via npm

```
npm install --save next-composition
```

## APIs

- [composeServerSideProps](#composeServerSideProps)
- [composeStaticProps](#composeStaticProps)
- [composeInitialProps](#composeInitialProps)

### `composeServerSideProps`

*composeServerSideProps* takes multiple *getServerSideProps* functions and single function that combines the results into one object.

```ts
import { composeServerSideProps } from 'next-composition';

const withAccount: GetServerSideProps = async (ctx) => {
  const data = await fetch('/account');
  return { props: { account: data } };
}

const withPosts: GetServerSideProps = async (ctx) => {
  const data = await fetch('/posts');
  return { props: { posts : data } };
}

export const getServerSideProps = composeServerSideProps(
  withAccount,
  withPosts,
  (ctx, { account }, { posts }) => ({
    props: {
      account: account,
      posts: posts,
    },
  }),
);

export default function Page(props) {
  // Results are available here
  const { account, posts } = props;
}
```

If the nth argument returns an object that contains a `prop` key, You can read prop from the `n+1`st argument of the callback.

If any of the functions in the head return an object that contains either `notFound` or `redirect`, the first result will be prioritized. In this case, the callback function will not be called.

### `composeStaticProps`

*composeStaticProps* takes multiple *getStaticProps* functions and single function that combines the results into one object. Behaves like `composeServerSideProps` but you can additionally return `revalidate` .

```ts
import { composeStaticProps } from 'next-composition';

const withAccount: GetStaticProps = async (ctx) => {
  const data = await fetch('/account');
  return { props: { account: data } };
}

const withPosts: GetStaticProps = async (ctx) => {
  const data = await fetch('/posts');
  return { props: { posts : data } };
}

export const getStaticProps = composeStaticProps(
  withAccount,
  withPosts,
  (ctx, { account }, { posts }) => ({
    props: {
      account: account,
      posts: posts,
    },
    revalidate: 1000,
  }),
);

export default function Page(props) {
  // Results are available here
  const { account, posts } = props;
}
```

### `composeInitialProps` (for Next.js < 9.x or _app.js)

*composeInitialProps* takes multiple *getInitialProps* functions and single function that combines the results into one object.

```ts
import { composeInitialProps } from 'next-composition';

const withAccount: GetStaticProps = async (ctx) => {
  const data = await fetch('/account');
  return { account: data };
}

const withPosts: GetStaticProps = async (ctx) => {
  const data = await fetch('/posts');
  return { posts: data };
}

export default function Page(props) {
  // Results are available here
  const { account, posts } = props;
}

Page.getInitialProps = composeInitialProps(
  withAccount,
  withPosts,
  (ctx, { account }, { posts }) => ({
    account: account,
    posts: posts,
  }),
);

```

## 404 and redirect

*composeServerSideProps* and *composeStaticProps* can handle redirects and not found in the same way as the Next.js API.

Multiple arguments can be specified even if one of the arguments returns a redirect, in which case the other results will be ignored.

If more than one of the functions specified in the argument returns a redirect, the first one specified will be used in priority.

```ts
const withAccount: GetServerSideProps = async (ctx) => {
  const data = await fetch('/account');

  // If no account found, redirect to the login page
  if (!data) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }

  return { props: { account: data } };
}

// If you pass withAccount to the composeServerSideProps,
// other props will be ignored and redirects to the login page
export const getStaticProps = composeServerSideProps(
  withAccount,
  withPosts,
  (ctx) => {...},
);
```
