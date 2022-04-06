import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTrackIdState", // unique ID (with respect to other atoms/selectors)
    default:null, // default Value(initial Value)

});
export const isPlayingState = atom({
    key: "isPlayingState",
    default: false,
})