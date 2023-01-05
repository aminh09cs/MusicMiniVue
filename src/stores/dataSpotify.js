import { defineStore } from "pinia";
import {getRandomTrack, getArtistInfo, getArtistAlbums, getArtistTopTracks} from '../service/apiService'
export const useSpotifyStore = defineStore("spotifyStore",{
state: () =>({
    random_track: undefined,
    artist_info: undefined,
    artist_albums: undefined,
    artist_top_tracks: undefined
}),
getters: {
    getRandomTrackDataG: (state) => state.random_track,
    getArtistInfo: (state) => state.artist_info,
    getArtistAlbums: (state) => state.artist_albums,
    getArtistTopTracks: (state) => state.artist_top_tracks,
},
actions: {
    async getRandomTrackData() {
      try {
        const random_track_ = await getRandomTrack();
        this.random_track = random_track_.data;
      } catch (error) {
        return error
      }
    },
    async getArtist(id) {
      try{
        const info_artist = await getArtistInfo(id);
        const albums_artist = await getArtistAlbums(id);
        const top_tracks_artist = await getArtistTopTracks(id);

        this.artist_info = info_artist.data;
        this.artist_albums = albums_artist.data;
        this.artist_top_tracks = top_tracks_artist.data;
      } catch (error) {
        return error
      }
    }
}
});