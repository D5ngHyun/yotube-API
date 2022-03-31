import React from 'react';
import styles from './search_header.module.css';

function Search_header({ onSearch }) {
  console.log('serach Header');

  const inputRef = React.useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;

    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
    console.log('click');
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" className={styles.img} />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
      <button className={styles.button} type="sumbit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
}

export default React.memo(Search_header);
