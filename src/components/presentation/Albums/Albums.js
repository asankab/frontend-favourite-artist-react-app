import React, { useState, useEffect } from 'react';
import SearchBar from './../Common/SearchBar';
import AlbumList from './AlbumList';
import Sort from './../Common/Sort';
import { fetch } from '../../../apis/index';
import Spinner from '../../UI/Spinner/Spinner';

function Albums(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection] = useState('asc');
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const defaultAlbum = 'believe';

  const fetchAlbumURL = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${
    searchTerm?.toLowerCase() || defaultAlbum
  }&format=json`;

  const onSearchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const onSortDirectionChangeHandler = (sortDirection) => {
    setSearchTerm(sortDirection);
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      const identifier = setTimeout(async () => {
        setLoading(true);
        const response = await fetch(fetchAlbumURL);
        const albumsResult = response.data.results.albummatches.album;
        const sortedAlbums = albumsResult?.sort((a, b) => {
          return a.name - b.name;
        });
        setAlbums(sortedAlbums);
        setLoading(false);
      }, 1000);

      return () => {
        clearTimeout(identifier);
      };
    };

    fetchAlbums();
  }, [fetchAlbumURL, sortDirection]);

  return (
    <>
      {loading && <Spinner />}
      <SearchBar onSearch={onSearchHandler} />
      <Sort onSortDirectionChange={onSortDirectionChangeHandler} />
      <AlbumList albums={albums} />
    </>
  );
}

Albums.propTypes = {};

export default Albums;
