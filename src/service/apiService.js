import axios from "../utils/axiosCustomize";
const getAllAlbums = async () => {
  try {
    const res = await axios.get('albums');
    return res;
  }
  catch (error) {
    alert(error);
  }
}

export {getAllAlbums}