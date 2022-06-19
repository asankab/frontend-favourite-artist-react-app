import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Card } from 'antd';
import classes from './Album.module.css';
import { NavLink } from 'react-router-dom';
import defaultImage from './../../../../assests/images/noimage.jpg';
import { HeartTwoTone } from '@ant-design/icons';
import {
  markAsFavouriteAlbums,
  unmarkFromFavouriteAlbums,
} from '../../../../store/action-creators/albums-action-creator';
import { hashCode } from './../../../../utils/hashCode';
import messages from '../../../../assests/localized-content/en-US.json';

function Album(props) {
  const { mbid, name, image, url } = props.album;
  const albumIdentifier = mbid || hashCode(url);
  const albumUrl = `/albums/${albumIdentifier}`;
  const maxTitleTextLengthToDisplay = 20;
  const imageUrl = image.length > 0 && image[image.length - 1]['#text'];
  const formatedName = `${name.substring(
    0,
    name.length > maxTitleTextLengthToDisplay
      ? maxTitleTextLengthToDisplay
      : name.length - 1
  )} ${name.length > maxTitleTextLengthToDisplay ? '...' : ' '}`;

  console.log(url);
  console.log(hashCode(url));

  const dispatch = useDispatch();
  const favouriteAlbums = useSelector((state) => {
    return state.favouriteAlbums;
  });

  const error = useSelector((state) => {
    return state.error;
  });

  const isMarkedAsFavorite = favouriteAlbums.includes(albumIdentifier);
  const favouriteIconColor = isMarkedAsFavorite ? '#FF0000' : '#999999';

  const favoriteToggleHandler = (event) => {
    if (isMarkedAsFavorite) {
      dispatch(unmarkFromFavouriteAlbums(albumIdentifier));
    } else {
      dispatch(markAsFavouriteAlbums(albumIdentifier));
    }
  };

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
      <Card
        className={classes.albumWrapper}
        hoverable
        cover={
          <img
            src={imageUrl || defaultImage}
            title={name}
            alt={name}
            className={classes.imageContainer}
          />
        }
      >
        <div className={classes.titleSection}>
          <h2 title={name}>
            {formatedName}&nbsp;
            <HeartTwoTone
              style={{ fontSize: '100%' }}
              title={messages.ClickToToggleFavouriteLabel}
              onClick={favoriteToggleHandler}
              twoToneColor={favouriteIconColor}
            />
          </h2>
        </div>
        <NavLink
          to={albumUrl}
          state={{ album: props.album, id: albumIdentifier }}
        >
          {messages.MoreInfoLabel}
        </NavLink>
      </Card>
    </>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;
