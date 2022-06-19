import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HeartTwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';

import classes from './AlbumDetails.module.css';
import Spinner from './../../../UI/Common/Spinner/Spinner';
import TrackList from './../Tracks/TracksList';
import { fetchTracks } from '../../../../store/action-creators/tracks-action-creator';
import {
  markAsFavouriteAlbums,
  unmarkFromFavouriteAlbums,
} from '../../../../store/action-creators/albums-action-creator';
import messages from './../../../../assests/localized-content/en-US.json';

function AlbumDetails(props) {
  const location = useLocation();
  const { album, id } = location.state;
  const { name, artist, image, url } = album;

  const albumIdentifier = id;
  const imageUrl = image.length > 0 && image[image.length - 1]['#text'];

  useEffect(() => {
    dispatch(fetchTracks(artist));
  }, [artist]);

  const dispatch = useDispatch();
  const favouriteAlbums = useSelector((state) => {
    return state.albums.favouriteAlbums;
  });

  const albumError = useSelector((state) => {
    return state.albums.error;
  });

  const tracks = useSelector((state) => {
    return state.tracks.tracks;
  });

  const trackError = useSelector((state) => {
    return state.tracks.error;
  });

  const isLoading = useSelector((state) => {
    return state.tracks.isLoading;
  });

  const favoriteToggleHandler = (event) => {
    if (isMarkedAsFavorite) {
      dispatch(unmarkFromFavouriteAlbums(albumIdentifier));
    } else {
      dispatch(markAsFavouriteAlbums(albumIdentifier));
    }
  };

  const isMarkedAsFavorite = favouriteAlbums.includes(albumIdentifier);
  const favouriteIconColor = isMarkedAsFavorite ? '#FF0000' : '#999999';

  const albumErrorContent = (
    <div className={classes.centerContent}>
      <span className={classes.greyText}>
        {messages['MarkOrUnmarkFavouriteError']}
      </span>
    </div>
  );

  const trackErrorContent = (
    <div className={classes.centerContent}>
      <span className={classes.greyText}>
        {messages['MarkOrUnmarkFavouriteError']}
      </span>
    </div>
  );

  return (
    <>
      {albumError.length > 0 && albumErrorContent}
      {trackError.length > 0 && trackErrorContent}
      {isLoading && <Spinner />}
      <Row>
        <Col md={16}>
          <div className={classes.albumWrapper}>
            <a href={url}>
              <img
                src={imageUrl}
                alt={name}
                title={name}
                className={classes.image500px}
              />
            </a>
            <h2 className={classes['zero-bottom-margin']}>
              {name} &nbsp;
              <HeartTwoTone
                style={{ fontSize: '100%' }}
                title={messages.ClickToToggleFavouriteLabel}
                onClick={favoriteToggleHandler}
                twoToneColor={favouriteIconColor}
              />
            </h2>
            <h4>{artist}</h4>
          </div>
        </Col>
        <Col md={8}>
          <TrackList tracks={tracks} />
        </Col>
      </Row>
    </>
  );
}

export default AlbumDetails;
