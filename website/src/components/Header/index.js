import React, {} from 'react';
import './Header.css';

const Header = ({black}) => {
    return(
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://ik.imagekit.io/pascoalini/Sem_t_tulo_OUhyybkcE.png" alt="VINIFLIX"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://ik.imagekit.io/pascoalini/ViniflixUser_3ZL5gBQLT.jpg" alt="User"/>
                </a>
            </div>
        </header>
    )
}

export default Header;