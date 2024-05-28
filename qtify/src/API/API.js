import axios from "axios";

export const fetchTopAlbums = async() => {
   try{
    const response = axios.get('https://qtify-backend-labs.crio.do/albums/top');
    console.log(response.data)
    return response;
   } catch(e){
    console.log('error data',e);
   }
}


export const fetchNewAlbums = async() => {
    try{
     const response = axios.get('https://qtify-backend-labs.crio.do/albums/new');
     return response;
    } catch(e){
     console.log(e);
    }
 }

export const fetchSlug = async(slug) => {
    try{
     const response = axios.get(`https://qtify-backend-labs.crio.do/albums/${slug}`);
     return response;
    } catch(e){
     console.log(e);
    }
 }

 export const fetchSongs = async() => {
    try{
     const response = axios.get('https://qtify-backend-labs.crio.do/songs');
     return response;
    } catch(e){
     console.log(e);
    }
 }