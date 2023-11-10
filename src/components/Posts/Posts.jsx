import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import styles from './Posts.module.scss';
import Pagination from '../Pagination/Pagination';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [curentPage, setCurentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //Данные для пагинации
  const lastPostsIndex = curentPage * postsPerPage; //определяем последн стр
  const firstPostsryIndex = lastPostsIndex - postsPerPage; // первую страницу
  const curentPosts = posts.slice(firstPostsryIndex, lastPostsIndex); //текущая страница

  // Пагинация
  const pagination = (pagNum) => setCurentPage(pagNum);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) {
    return <h1 className={styles.fechError}>{error}</h1>;
  }

  if (isLoading) {
    return (
      <div className={styles.loadWrap}>
        <AiOutlineLoading3Quarters className={styles.loader} />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.postsWrapper}>
        {curentPosts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        pagination={pagination}
        activePage={curentPage}
      />
    </div>
  );
};

export default Posts;
