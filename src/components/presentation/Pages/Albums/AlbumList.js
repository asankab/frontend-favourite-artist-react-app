import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Album from './Album';
import classes from './AlbumList.module.css';
import messages from './../../../../assests/localized-content/en-US.json';

function AlbumList(props) {
  const { albums } = props;
  let albumComponents = [];

  if (albums?.length > 0) {
    albumComponents = albums.map((album, index) => {
      return (
        <Col>
          <Album key={index} album={album} />
        </Col>
      );
    });
  }

  return (
    <div className={classes.contentWrapper}>
      {albums?.length > 0 ? (
        <Row gutter={[16, 16]}>{albumComponents}</Row>
      ) : (
        <div className={classes.centerContent}>
          <span className={classes.greyText}>{messages.NoDataFound}</span>
        </div>
      )}
    </div>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
};

export default AlbumList;
