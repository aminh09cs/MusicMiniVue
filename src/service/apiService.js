import axios from "../utils/axiosCustomize";

const getRandomTrack = async () => {
  try {
    const res = await axios.get('search', {
        params:{
            q: 'a',
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

export { getRandomTrack, getArtistInfo, getArtistAlbums, getArtistTopTracks}