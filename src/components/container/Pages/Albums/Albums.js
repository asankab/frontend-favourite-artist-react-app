import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../../UI/Common/SimpleSearch/SearchBar';
import AlbumList from '../../../presentation/Pages/Albums/AlbumList';
import Sort from '../../../UI/Common/ToggleSort/Sort';
import Spinner from '../../../UI/Common/Spinner/Spinner';
import { fetchAlbums } from '../../../../store/action-creators/index';
import messages from '../../../../assests/localized-content/en-US.json';
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

  const error = useSelector((state) => {
    return state.error;
  });

  useEffect(() => {
    dispatch(fetchAlbums(searchTerm));
  }, [searchTerm]);

  const errorContent = (
    <div className={classes.centerContent}>
      <span className={classes.greyText}>{messages['FetchError']}</span>
    </div>
  );

  return (
    <div className={classes.contentWrapper}>
      {isLoading && <Spinner />}
      <SearchBar onSearch={searchHandler} />
      <Sort onSortToggled={sortToggleHandler} />
      {error.length > 0 ? errorContent : <AlbumList albums={albumsList} />}
    </div>
  );
}

Albums.propTypes = {};

export default Albums;
