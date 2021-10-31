import { Post } from '../models/post';
import { GetServerSideProps } from 'next';

export type WithPostProps = {
  post: Post;
};

export const withPost: GetServerSideProps<WithPostProps> = async (context) => {
  if (!context.query.postId) {
    return {
      notFound: true,
    };
  }

  const json = (await (
    await fetch(`/posts/${context.query.postId}`)
  ).json()) as Post;

  return {
    props: {
      post: json,
    },
  };
};
