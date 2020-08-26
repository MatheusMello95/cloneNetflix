import React from 'react';
import './Header.css';

export default ({black}) =>{
    return(
        <header className={black ? 'black':''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png" alt="netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-2796-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbNIKili1pAe116qNur_XoN7rbpxY5zRXPjjdGuMMHYaHlPBAqLq2PuLgrOB7qxHpJmuRs58MRSmzsrmnDJnkJDM2A.png?r=f71" alt="Usuario"/>
                </a>
            </div>
        </header>
    )
}