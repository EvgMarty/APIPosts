import styles from './Post.module.scss';

const Post = (props) => {
  const { id, userId, title, body } = props;
  return (
    <div className={styles.post}>
      <span className={styles.namePost}>{title}</span>
      <p>{body}</p>
      <span className={styles.userId}>UserID: {userId}</span>
    </div>
  );
};

export default Post;
