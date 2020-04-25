import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';

function App() {

  const [searchFromUser, saveSearchFromUser] = useState({});

  useEffect(() => {

    if (Object.keys(searchFromUser).length === 0) {
      return;
    }
  }, [searchFromUser]);

  return (
   <Fragment>
     <Form
        saveSearchFromUser = {saveSearchFromUser}
     />
   </Fragment>
  );
}

export default App;
