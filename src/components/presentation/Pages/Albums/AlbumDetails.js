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
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);

  const location = useLocation();
  const { album, id } = location.state;
  const { name, artist, image, url } = album;

  const albumIdentifier = id;
  // const fetchTracksByArtistURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&format=json`;
  const imageUrl = image.length > 0 && image[image.length - 1]['#text'];

  useEffect(() => {
    // const fetchTracks = async () => {
    //   setLoading(true);
    //   const response = await fetch(fetchTracksByArtistURL);
    //   setTracks(response.data.toptracks.track);
    //   setLoading(false);
    // };
    // fetchTracks();

    dispatch(fetchTracks(artist));
  }, [artist]);

  const dispatch = useDispatch();
  const favouriteAlbums = useSelector((state) => {
    return state.favouriteAlbums;
  });

  const error = useSelector((state) => {
    return state.error;
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

  const errorContent = (
    <div className={classes.centerContent}>
      <span className={classes.greyText}>
        {messages['MarkOrUnmarkFavouriteError']}
      </span>
    </div>
  );

  return (
    <>
      {error.length > 0 && errorContent}
      {loading && <Spinner />}
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
