import React from "react";
import '../../App.css'
import { AreaHeader } from './styled';


function Header() {
    return (
        <AreaHeader>
            <div className='header'>
                <div className="logo">
                    <a href="#container" alt="home"><h1>Alexandre Vitor</h1></a>
                    <h2>Software Engineer</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="#curriculo" alt="link do currículo">Currículo</a></li>
                        <li><a href="#projetos" alt="link dos projetos">Projetos</a></li>
                        <li><a href="#contato" alt="link do contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;