import { createStore } from "redux";

const initialState = {
  tracks: ["new 1 track", "new 2 track"],
  playlists: ["My home playlist", "My work playlist"]
};

function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return {
      ...state,
      tracks: [...state.tracks, action.payload]
    };
  } else
  return state;
}

const store = createStore(
  playlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
