import React from 'react';

const ArtistInfo = ({resultFromApiAudioDB, errorApi, errorFromApiAudioDB}) => {

    if (Object.keys(resultFromApiAudioDB).length === 0 || errorApi !== '' || errorFromApiAudioDB === undefined) return null;
    const {strArtistThumb, strStyle, strGenre, strBiographyEN} = resultFromApiAudioDB;
    
    return(
        <div className="card border-ligth">
            <div className="card-header bg-primary text-light font-height-bold">
                Artist information
            </div>
            <div className="card-body">
                <img alt="Artist logo" src={strArtistThumb}/>
                <p className="card-text"><b>Genre:</b> {strGenre}</p>
                <p className="card-text"><b>Music style:</b> {strStyle}</p>
                <p className="card-text"><b>Biography:</b> {strBiographyEN}</p>

            </div>
        </div>
    )}

export default ArtistInfo;