import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Song from './components/Song'; 

import axios from 'axios'; 

function App() {

  const [searchFromUser, saveSearchFromUser] = useState({});
  const [resultFromApi, saveresultFromApi] = useState({});
  const [errorApi, saveErrorApi] = useState('');

  useEffect(() => {

    if (Object.keys(searchFromUser).length === 0) {
      return;
    }
    queryFromLyricsOvhAPI();
  }, [searchFromUser]);

  const queryFromLyricsOvhAPI = async () => {

    const url = `https://api.lyrics.ovh/v1/${searchFromUser.musicTeam}/${searchFromUser.song}`;
    await axios.get(url).
        then((response) => {
          saveErrorApi('');
          console.log(response.data);
          saveresultFromApi(response.data);
          return;
      })
      .catch((error) => {
        if (error.response) {
            if (error.response.status === 404){
              console.log(error.response.data.error);
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
      });
  }
  
  return (
    <Fragment>
      <Form
        saveSearchFromUser = {saveSearchFromUser}
        errorApi = {errorApi}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">


          </div>
          <div className="col-md-6">
            <Song
            resultFromApi = {resultFromApi}
            errorApi = {errorApi}
            />
          </div>
        </div>
       </div>
    </Fragment>
  );
}

export default App;
