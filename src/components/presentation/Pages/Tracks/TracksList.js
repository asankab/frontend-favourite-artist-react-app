import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import classes from './TrackList.module.css';

function TracksList(props) {
  const tracksData = props.tracks?.map((track) => {
    return {
      name: track.name,
      listeners: track.listeners,
      playcount: track.playcount,
      url: track.url,
    };
  });

  return (
    <div className={classes['tracks-container']}>
      <h2>Tracks ({tracksData.length})</h2>
      {tracksData.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={tracksData}
          renderItem={(track) => (
            <List.Item>
              <List.Item.Meta
                key={track.mbid}
                avatar={<PlayCircleOutlined />}
                title={<a href={track.url}>{track.name}</a>}
                description={`Listeners: ${
                  track.listeners || 0
                } | Play Count: ${track.playcount || 0}`}
              />
            </List.Item>
          )}
        />
      ) : (
        'No tracks found'
      )}
    </div>
  );
}

TracksList.propTypes = {
  tracks: PropTypes.array.isRequired,
};

export default TracksList;
