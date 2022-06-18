import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Row } from 'antd';
import classes from './AlbumDetails.module.css';
import { fetch } from './../../../apis/index';
import Spinner from './../../UI/Spinner/Spinner';
import TrackList from './../Tracks/TracksList';
import { HeartTwoTone } from '@ant-design/icons';
import { setValue, getValueByKey } from './../../../utils/localStorageUtil';
import messages from './../../../assests/localized-content/en-US.json';

import AlbumContext from '../../../store/albums-context';

function AlbumDetails(props) {
  const albumCtx = useContext(AlbumContext);

  console.log(albumCtx._currentValue.albums);

  const location = useLocation();
  const { album } = location.state;
  const [loading, setLoading] = useState(false);
  const [markedAsFavorite, setMarkedAsFavorite] = useState(false);
  const { mbid, name, artist, image, url } = album;
  const imageUrl = image.length > 0 && image[image.length - 1]['#text'];
  const fetchTracksByArtistURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&format=json`;
  const [tracks, setTracks] = useState([]);
  const isMarkedAsFavorite = getValueByKey(mbid);

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      const response = await fetch(fetchTracksByArtistURL);
      setTracks(response.data.toptracks.track);
      setLoading(false);
    };

    fetchTracks();
  }, []);

  const favoriteToggleHandler = (event) => {
    let isFavourite = getValueByKey(mbid);

    if (isFavourite === 'true') {
      isFavourite = false;
    } else {
      isFavourite = true;
    }

    setValue(mbid, isFavourite);
    setMarkedAsFavorite(isFavourite);
  };

  const favouriteIconColor =
    isMarkedAsFavorite === 'true' ? '#FF0000' : '#999999';

  return (
    <>
      {loading && <Spinner />}
      <Row>
        <Col md={16}>
          <div className={classes.albumDetailsWrapper}>
            <div>
              <a href={url}>
                <img
                  src={imageUrl}
                  alt={name}
                  title={name}
                  className={classes.image500px}
                />
              </a>
              <h3 className={classes['no-space']}>{name} &nbsp;</h3>
              <HeartTwoTone
                style={{ fontSize: '150%' }}
                title={messages.ClickToToggleFavouriteLabel}
                onClick={favoriteToggleHandler}
                twoToneColor={favouriteIconColor}
              />
              <h5>{artist}</h5>
            </div>
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
