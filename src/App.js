import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Song from './components/Song'; 
import ArtistInfo from './components/ArtistInfo'; 
import axios from 'axios'; 

function App() {

  const [searchFromUser, saveSearchFromUser] = useState({});
  const [resultFromApi, saveresultFromApi] = useState({});
  const [errorApi, saveErrorApi] = useState('');
  const [resultFromApiAudioDB, saveResultApiAudioDB] = useState({});
  const [errorFromApiAudioDB, saveErrorApiAudioDB] = useState({});


  useEffect(() => {

    if (Object.keys(searchFromUser).length === 0) {
      return;
    }
    queryFromLyricsOvhAPI();
  }, [searchFromUser]);

  const queryFromLyricsOvhAPI = async () => {

    let musicTeam = searchFromUser.musicTeam.toLowerCase();
    let song = searchFromUser.song;

    const fetchURL = (url) => axios.get(url);

    const urlFromLyricsOVH= `https://api.lyrics.ovh/v1/${musicTeam}/${song}`;
    const urlFromTheAudioDB = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${musicTeam}`;

    let URLs = [urlFromLyricsOVH, urlFromTheAudioDB].map(fetchURL);

    Promise.all(URLs).then((response) => {
      saveErrorApi('');
      saveresultFromApi(response[0].data);
      saveResultApiAudioDB(response[1].data.artists[0]);
      if (response === 'undefined') {
        saveErrorApiAudioDB(true);
      }
      return;
    }).catch((error) => {
      if (error.response) {
        if (error.response.status === 404){
          const error404Message = error.response.data.error;
          saveErrorApi(error404Message);
        }
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('error, request', error.request);
      } else {
        console.log('Error', error.message);
      }
      console.error(error.config);
    })}
  
  return (
    <Fragment>
      <Form
        saveSearchFromUser = {saveSearchFromUser}
        errorApi = {errorApi}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo
            resultFromApiAudioDB = {resultFromApiAudioDB}
            errorApi = {errorApi}
            errorFromApiAudioDB = {errorFromApiAudioDB}
            />
          </div>
          <div className="col-md-6">
            <Song
            resultFromApi = {resultFromApi}
            errorApi = {errorApi}
            errorFromApiAudioDB = {errorFromApiAudioDB}
            />
          </div>
        </div>
       </div>
    </Fragment>
  );
}

export default App;
