import { periodOptions } from "@/lib/openopus";
import { atom } from "recoil";

export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});

export const currPeriodIdState = atom({
  key: "currPeriodIdState",
  default: periodOptions.Romantic,
});

export const currComposerIdState = atom({
  key: "currComposerIdState",
  default: null,
});

export const currWorkIdState = atom({
  key: "currWorkIdState",
  default: null,
});

export const currRecordingIdState = atom({
  key: "currRecordingIdState",
  default: null,
});

export const currAlbumIdState = atom({
  key: "currAlbumIdState",
  default: null,
});

export const currTrackIdState = atom({
  key: "currTrackIdState",
  default: null,
});

export const currSearchQueryState = atom({
  key: "currSearchQueryState",
  default: null,
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
