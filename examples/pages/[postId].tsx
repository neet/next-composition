import { Layout } from '../components/Layout';
import { composeServerSideProps } from '../../src';
import { withAccount, WithAccountProps } from '../utils/withAccount';
import { withPost, WithPostProps } from '../utils/withPost';

export const getServerSideProps = composeServerSideProps({
  use: [withAccount, withPost],
  resolver: (props) => ({
    ...props,
    title: `${props.post.title} - My Blog`,
  }),
});

const PostPage = (props: WithAccountProps & WithPostProps): JSX.Element => {
  const { account, post } = props;

  return (
    <div>
      <span>Logged in as {account.username}</span>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

PostPage.Layout = Layout;

export default PostPage;
