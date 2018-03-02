import { DID_UPDATE_CODE } from "./types";

const INITIAL_STATE = "//I ♥ react-codemirror2\n";

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DID_UPDATE_CODE:
      return action.payload;
    default:
      return state;
  }
}
