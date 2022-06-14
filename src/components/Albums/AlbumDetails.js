import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Row } from 'antd';
import classes from './AlbumDetails.module.css';
import { fetch } from './../../apis/index';
import Spinner from './../UI/Layout/Spinner';

import TrackList from './../Tracks/TracksList';

function AlbumDetails(props) {
  const location = useLocation();
  const { album } = location.state;
  const [loading, setLoading] = useState(false);
  const { name, artist, image, url } = album;
  const imageUrl = image.length > 0 && image[image.length - 1]['#text'];
  const fetchTracksByArtistURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=034cd8882ca9b14875f8a7a907aafbbd&format=json`;
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      const response = await fetch(fetchTracksByArtistURL);
      console.log(response.data.toptracks.track);
      setTracks(response.data.toptracks.track);
      setLoading(false);
    };

    fetchTracks();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Row>
        <Col md={12}>
          <div className={classes.albumDetailsWrapper}>
            <div>
              <a href={url}>
                <img src={imageUrl} alt={name} title={name} />
              </a>
              <h3 className={classes['no-space']}>{name}</h3>
              <h5>{artist}</h5>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <TrackList tracks={tracks} />
        </Col>
      </Row>
    </>
  );
}

export default AlbumDetails;
