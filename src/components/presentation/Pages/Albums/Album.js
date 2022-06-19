import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { Card } from 'antd';
import classes from './Album.module.css';
import { NavLink } from 'react-router-dom';
import defaultImage from './../../../../assests/images/noimage.jpg';
import { setValue, getValueByKey } from '../../../../utils/localStorageUtil';
import { HeartTwoTone } from '@ant-design/icons';
import messages from '../../../../assests/localized-content/en-US.json';

function Album(props) {
  const [markedAsFavorite, setMarkedAsFavorite] = useState(false);
  const { mbid, name, image } = props.album;
  const albumUrl = `/albums/${mbid || uuidv4()}`;
  const maxTitleTextLengthToDisplay = 20;
  const imageUrl = image.length > 0 && image[image.length - 1]['#text'];
  const formatedName = `${name.substring(
    0,
    name.length > maxTitleTextLengthToDisplay
      ? maxTitleTextLengthToDisplay
      : name.length - 1
  )} ${name.length > maxTitleTextLengthToDisplay ? '...' : ' '}`;

  const isMarkedAsFavorite = getValueByKey(mbid);
  const favouriteIconColor =
    isMarkedAsFavorite === 'true' ? '#FF0000' : '#999999';

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

  return (
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
      <NavLink to={albumUrl} state={{ album: props.album }}>
        {messages.MoreInfoLabel}
      </NavLink>
    </Card>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;
