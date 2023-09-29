import React from "react";
import '../../App.css'

function Header() {
    return (
        <div className='header'>
            <div>
                <a href="#container" alt="home"><h1>Alexandre Vitor</h1></a>
                <h2>Software Engineer</h2>
            </div>

            <div>
                <nav>
                    <ul>
                        <li><a href="#curriculo" alt="link do currículo">Currículo</a></li>
                        <li><a href="#projetos" alt="link dos projetos">Projetos</a></li>
                        <li><a href="#contato" alt="link do contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;