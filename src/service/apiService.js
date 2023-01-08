import axios from "../utils/axiosCustomize";
//
function makeid(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }
    return result;
}
//
const getRandomTrack = async () => {
  try {
    const res = await axios.get('search', {
        params:{
            q: 'love',
            type: 'track',
            market: 'ES',
            limit: 10,
            offset: 5,
        }
    });
    return res;
  }
  catch (error) {
    alert(error);
  }
}

const getArtistInfo = async (id) =>{
  try{
    const res = await axios.get(`artists/${id}`);
    return res;
  }
  catch (error) {
    alert(error);
  }
}
const getArtistAlbums = async (id) =>{
  try{
    const res = await axios.get(`artists/${id}/albums`, {
      params: {
        include_groups: 'album',
        market: 'ES',
        limit: 50,
      }
    });
    return res;
  }
  catch (error) {
    alert(error);
  }
}
const getArtistTopTracks = async (id) =>{
  try{
    const res = await axios.get(`artists/${id}/top-tracks`,{
      params:{
        market: 'ES',
      }
    });
    return res;
  }
  catch (error) {
    alert(error);
  }
}

const getUserInfo = async () =>{
  try{
    const res = await axios.get(`me`);
    return res;
  }
  catch(error){
    alert(error);

  }
}
const getUserPlaylists  = async () =>{
    try {
    const res = await axios.get(`me/playlists`);
    return res;
  }
  catch (error) {
    alert(error);
  }
}
const getPlaylistItems = async (playlist_id) =>{
  try{
    const res = await axios.get(`playlists/${playlist_id}/tracks`);
    return res
  }
  catch(error){
    return error;
  }
}


export {
    getRandomTrack,
    getArtistInfo,
    getArtistAlbums,
    getArtistTopTracks,
    getUserInfo,
    getUserPlaylists,
    getPlaylistItems,
};