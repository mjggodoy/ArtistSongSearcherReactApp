import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import axios from 'axios'; 

function App() {

  const [searchFromUser, saveSearchFromUser] = useState({});
  const [resultFromApi, saveresultFromApi] = useState({});

  const [errorApi, saveErrorApi] = useState();


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
          console.log(response.data);
          saveresultFromApi(response.data);
          return;
      })
      .catch((error) => {
        if (error.response) {
            if (error.response.status === 404){
              const error404Message = error.response.data;
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
     />
   </Fragment>
  );
}

export default App;
