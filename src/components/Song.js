import React, { Fragment } from 'react';

const Song = ({resultFromApi, errorApi}) => {

    if (Object.keys(resultFromApi).length == 0 || errorApi !== '') return null;
    return(
        <Fragment>
            <h2>Song lyrics</h2>
            <p className="song">{resultFromApi.lyrics}</p>

        </Fragment>
    )}

export default Song;