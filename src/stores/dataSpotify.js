import { defineStore } from "pinia";
import {getRandomTrack, getArtistInfo, getArtistAlbums, getArtistTopTracks, getUserInfo, getUserPlaylists, getPlaylistItems} from '../service/apiService'
export const useSpotifyStore = defineStore("spotifyStore", {
    state: () => ({
        random_track: undefined,
        artist_info: undefined,
        artist_albums: undefined,
        artist_top_tracks: undefined,
        user_info: undefined,
        user_playlists: undefined,
        user_playlist_items: undefined,
    }),
    getters: {
        getRandomTrackDataG: (state) => state.random_track,
        getArtistInfo: (state) => state.artist_info,
        getArtistAlbums: (state) => state.artist_albums,
        getArtistTopTracks: (state) => state.artist_top_tracks,
        getUserInfo: (state) => state.user_info,
        getUserPlaylists: (state) => state.user_playlists,
        getUserPlaylistItems: (state) => state.user_playlist_items,
    },
    actions: {
        async getRandomTrackData() {
            try {
                const random_track_ = await getRandomTrack();
                this.random_track = random_track_.data;
            } catch (error) {
                return error;
            }
        },
        async getArtist(id) {
            try {
                const info_artist = await getArtistInfo(id);
                const albums_artist = await getArtistAlbums(id);
                const top_tracks_artist = await getArtistTopTracks(id);

                this.artist_info = info_artist.data;
                this.artist_albums = albums_artist.data;
                this.artist_top_tracks = top_tracks_artist.data;
            } catch (error) {
                return error;
            }
        },
        async getUser() {
            try {
                const info_user = await getUserInfo();
                const playlists_user = await getUserPlaylists();
                this.user_info = info_user.data;
                console.log("info", this.user_info);
                this.user_playlists = playlists_user.data;

                let user_id_playlist = this.user_playlists.items[0].id;
                const items_playlist_user = await getPlaylistItems(
                    user_id_playlist,
                );
                this.user_playlist_items = items_playlist_user.data;
            } catch (error) {
                return error;
            }
        },
    },
});