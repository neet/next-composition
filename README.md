# next-composition

[![npm](https://img.shields.io/npm/v/next-composition.svg)](https://www.npmjs.com/package/next-composition)
[![CI](https://github.com/neet/next-composition/actions/workflows/ci.yml/badge.svg)](https://github.com/neet/next-composition/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/neet/next-composition/branch/main/graph/badge.svg?token=CZEL31RG9D)](https://codecov.io/gh/neet/next-composition)

Next.js utility for reusing _getServerSideProps_, _getStaticProps_ and _getInitialProps_ logics.

- [Examples](https://github.com/neet/next-composition/tree/main/examples)

## Install

You can install it via npm

```
npm install --save next-composition
```

### How does it different from `_middleware.js`?

Next.js introduces a feature called _middleware_ since v12.x which allows you to handle shared server side logic in a single module.

It's goal is kind of similar to `next-composition`: sharing common logic among multiple pages. However, since `_middleware` designed to be executed as _edge function_, it has some limitations such as it does not allow you to pass props to page components.

`next-composition` is just a utility and it's entity is just a _getServerSideProps_ and _getStaticProps_ so you can use it just like other APIs.

## APIs

- [composeServerSideProps](#composeServerSideProps)
- [composeStaticProps](#composeStaticProps)
- [composeInitialProps](#composeInitialProps)

### `composeServerSideProps(params): GetServerSideProps`

_composeServerSideProps_ takes multiple _getServerSideProps_ and composes them into a single function.

- `params.use` - Array of _getServerSideProps_ to compose. Object returned from them will be shallow merged and returned from it.

- `params.resolver` (optional, default: `x => x`) - A callback function that takes composite props and returns interpolated props.

```ts
import { composeServerSideProps } from 'next-composition';

const withAccount: GetServerSideProps = async (ctx) => {
  const data = await fetch('/account');
  return { props: { account: data } };
};

const withPosts: GetServerSideProps = async (ctx) => {
  const data = await fetch('/posts');
  return { props: { posts: data } };
};

export const getServerSideProps = composeServerSideProps({
  use: [withAccount, withPosts],
  resolver: (props) => ({
    ...props,
    title: `${props.posts.length} posts - My blog`,
  }),
});

export default function Page(props) {
  // Results are available here
  const { account, posts } = props;
}
```

If any of the functions in the head return an object that contains either `notFound` or `redirect`, the first result will be prioritized.

### `composeStaticProps(params): GetStaticProps`

_composeStaticProps_ takes multiple _getStaticProps_ functions and composes them into a single function. Behaves like `composeServerSideProps` but you can additionally specify `revalidate`.

- `params.use` - Array of _getStaticProps_ to compose. Object returned from them will be shallow merged and returned from it.

- `params.resolver` (optional, default: `x => x`) - A callback function that takes composite props and returns interpolated props.

- `params.revalidate` (optional, default: `min`) - Could be one of `min` `max` or number. If you specify numbers, it will be used as `revalidate`. If you specify `min` (or max), the minimal number from `revalidate` returned from `use` will be used.

```ts
import { composeStaticProps } from 'next-composition';

const withAccount: GetStaticProps = async (ctx) => {
  const data = await fetch('/account');
  return { props: { account: data }, revalidate: 60 };
};

const withPosts: GetStaticProps = async (ctx) => {
  const data = await fetch('/posts');
  return { props: { posts: data }, revalidate: 30 };
};

export const getStaticProps = composeStaticProps({
  use: [withAccount, withPosts],
  resolver: (props) => ({
    ...props,
    title: `${props.posts.length} posts - My blog`,
  }),
  revalidate: 'min', // `30` will be used in this case
});

export default function Page(props) {
  // Results are available here
  const { account, posts } = props;
}
```

### `composeInitialProps(params): GetInitialProps` (for Next.js < 9.x)

_composeInitialProps_ takes multiple _getInitialProps_ functions and composes them into a single function.

- `params.use` - Array of _getInitialProps_ to compose. Object returned from them will be shallow merged and returned from it.

- `params.resolver` (optional, default: `x => x`) - A callback function that takes composite props and returns interpolated props.

```ts
import { composeInitialProps } from 'next-composition';

const withAccount = async (ctx) => {
  const data = await fetch('/account');
  return { account: data };
};

const withPosts = async (ctx) => {
  const data = await fetch('/posts');
  return { posts: data };
};

export default function Page(props) {
  // Results are available here
  const { account, posts } = props;
}

Page.getInitialProps = composeInitialProps({
  use: [withAccount, withPosts],
  resolver: (props) => ({
    ...props,
    title: `${props.posts.length} posts - My blog`,
  }),
});
```

## How to handle 404 and redirect

_composeServerSideProps_ and _composeStaticProps_ can handle redirects and not found in the same way as the Next.js API.

Multiple functions can be specified in `use` even if one of the arguments returns a redirect, in which case the other results will be ignored.

If more than one of the functions specified in `use` returns a redirect, the first one specified will be used in priority.

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
};

// If you pass withAccount to the composeServerSideProps,
// other props will be ignored and redirects to the login page
export const getStaticProps = composeServerSideProps({
  use: [withAccount, withPosts],
});
```
