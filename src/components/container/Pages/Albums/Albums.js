import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../../UI/Common/SimpleSearch/SearchBar';
import AlbumList from '../../../presentation/Pages/Albums/AlbumList';
import Sort from '../../../UI/Common/ToggleSort/Sort';
import Spinner from '../../../UI/Common/Spinner/Spinner';
import { fetchAlbums } from '../../../../store/action-creators/albums-action-creator';
import messages from '../../../../assests/localized-content/en-US.json';
import classes from './Albums.module.css';

function Albums(props) {
  const defaultAlbumName = 'ASCENDANC';
  const [searchTerm, setSearchTerm] = useState(defaultAlbumName);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm || defaultAlbumName);
  };

  const dispatch = useDispatch();
  const albums = useSelector((state) => {
    return state.albums.albums;
  });

  const isLoading = useSelector((state) => {
    return state.albums.isLoading;
  });

  const error = useSelector((state) => {
    return state.albums.error;
  });

  useEffect(() => {
    dispatch(fetchAlbums(searchTerm));
  }, [searchTerm]);

  const sortToggleHandler = (sortDirection) => {
    const sortedAlbums = [...albums].sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(sortedAlbums);
    setSearchTerm(sortDirection);
  };

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
      {error?.length > 0 ? errorContent : <AlbumList albums={albums} />}
    </div>
  );
}

Albums.propTypes = {};

export default Albums;
