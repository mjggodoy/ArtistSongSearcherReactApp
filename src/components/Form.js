import React, {useState} from 'react';

const Form = () => {

    const [search, saveSearch] = useState(
        {
            musicTeam: '',
            song: ''
        });

    const [error, saveError] = useState(false);
    
    const updateState = e => {
        saveSearch({...search, [e.target.name]: e.target.value});
    }

    const searchWithParameters = e => {
        e.preventDefault();
        if (search == null || search.musicTeam.trim() === '' || search.song.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
    }
        
    return(
        <div className="bg-info">
            <div className="container">
            {error ? <p className="alert alert-danger text-center p-2">Please introduce an artist's name AND a song</p> : ''}

                <div className="row">
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit = {searchWithParameters}
                    >
                        <fieldset className="text-center">
                            <legend>Searcher for Song Lyrics</legend>
                       
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Music Team</label>
                                    <input 
                                        type="text" 
                                        name = "musicTeam"
                                        className = "form-control"
                                        placeholder = "Introduce a music team here..."
                                        onChange = {updateState}>
                                    </input>
                                </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Song</label>
                                    <input 
                                        type="text"
                                        name = "song"
                                        className="form-control"
                                        placeholder="Introduce a song here..."
                                        onChange = {updateState}>
                                    </input>
                                </div>
                            </div>
                        </div>
                        <button type="submission" className="btn btn-primary float-right">Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>    
    );
}

export default Form;