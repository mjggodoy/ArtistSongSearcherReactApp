import React, { Fragment } from 'react';

const Song = ({resultFromApi, errorApi, errorFromApiAudioDB}) => {

    if (Object.keys(resultFromApi).length === 0 || errorApi !== '' || errorFromApiAudioDB === undefined) return null;
    
    return(
        <Fragment>
            <h2>Song lyrics</h2>
            <p className="song">{resultFromApi.lyrics}</p>
        </Fragment>
    )}

export default Song;