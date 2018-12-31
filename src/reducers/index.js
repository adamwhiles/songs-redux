import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "3:07" },
    { title: "Creep", duration: "4:02" },
    { title: "Don't Speak", duration: "3:43" },
    { title: "Wonderwall", duration: "4:47" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
