import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  if (props.song) {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{props.song.title}</div>
          <div className="meta">{props.song.duration}</div>
        </div>
      </div>
    );
  }
  return <div>Select a Song</div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
