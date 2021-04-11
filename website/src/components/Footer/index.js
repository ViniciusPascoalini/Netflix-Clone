import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>
                Projeto Desenvolvido com <span role="img" aria-label="coração">❤️</span> pela B7Web<br/>
                Replicado <span role="img" aria-label="programador">🧑‍💻</span> por Vinícius Pascoalini: <div className="footer--gitHubLogo">
                <a href='https://github.com/ViniciusPascoalini'> 
                        <img src="https://ik.imagekit.io/pascoalini/GitHub-Logo_y9dVGQgfn.png" alt="gitHubLogo"></img> 
                </a>
                </div> <br/>
                Direitos de imagem para Netflix<br/>
                Dados pegos do site Themoviedb.org
            </p>  
        </footer>
    )
}

export default Footer;