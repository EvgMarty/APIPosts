import styles from './Pagination.module.scss';

const Pagination = (props) => {
  const { postsPerPage, totalPosts, pagination, activePage } = props;
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className={styles.paginWrap}>
        {pageNumber.map((number) => (
          <li
            className={`${styles.paginNum} ${
              number === activePage ? styles.active : ''
            }`}
            key={number}
            onClick={() => pagination(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
