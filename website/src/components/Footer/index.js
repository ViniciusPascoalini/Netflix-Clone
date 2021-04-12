import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                Projeto Desenvolvido com <span role="img" aria-label="coração">❤️</span> pela <a href="https://b7web.com.br/fullstack/">B7Web</a><br/>
                Replicado <span role="img" aria-label="programador">🧑‍💻</span> por Vinícius Pascoalini:
            </div>
                
            <div className="footer--gitHubLogo">
                <a href='https://github.com/ViniciusPascoalini'> 
                    <img src="https://ik.imagekit.io/pascoalini/GitHub-Logo_y9dVGQgfn.png" alt="gitHubLogo"></img> 
                </a>
            </div>

            <div>
                Direitos de imagem para Netflix.<br/>
                Dados pegos do site Themoviedb.org
            </div>
               
            
        </footer>
    )
}

export default Footer;