import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../../UI/Common/SimpleSearch/SearchBar';
import AlbumList from '../../../presentation/Pages/Albums/AlbumList';
import Sort from '../../../UI/Common/ToggleSort/Sort';
import Spinner from '../../../UI/Common/Spinner/Spinner';
import { fetchAlbums } from '../../../../store/action-creators/index';
import classes from './Albums.module.css';

function Albums(props) {
  const defaultAlbumName = 'ASCENDANC';
  const [searchTerm, setSearchTerm] = useState(defaultAlbumName);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm || defaultAlbumName);
  };

  const sortToggleHandler = (sortDirection) => {
    const sortedAlbums = [...albumsList].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    setSearchTerm(sortDirection);
  };

  const dispatch = useDispatch();
  const albumsList = useSelector((state) => {
    return state.albums;
  });

  const isLoading = useSelector((state) => {
    return state.isLoading;
  });

  useEffect(() => {
    dispatch(fetchAlbums(searchTerm));
  }, [searchTerm]);

  return (
    <div className={classes.contentWrapper}>
      {isLoading && <Spinner />}
      <SearchBar onSearch={searchHandler} />
      <Sort onSortToggled={sortToggleHandler} />
      <AlbumList albums={albumsList} />
    </div>
  );
}

Albums.propTypes = {};

export default Albums;