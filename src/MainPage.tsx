import React from 'react';

import {Link} from 'react-router-dom';

export const MainPage = () => <>
    <p>A music guessing game!</p>
    <div className="columns is-multiline" >
        <div className="column"> 
            <Link to="/join/"><div className="button is-fullwidth is-success"> Join Game </div></Link>
        </div>
        <div className="column"> <div className="button is-fullwidth is-info"> New Game </div></div>
        <div className="column"> <div className="button is-fullwidth is-info"> Settings </div></div>
    </div>
</>;

export default MainPage;