import React from "react";
import '../../../App.css';
import { AreaResume } from './styled';

function Resume() {
    return (
        <AreaResume>
            <section id="curriculo" className="curriculo">
                <div className="experience">
                    <h3>Experiência</h3>
                    <div>
                        <h4>Drogafonte - Jovem aprendiz (aux. de logística)<br />Pernambuco, Brazil<br />Novembro 2021 - Novembro 2022</h4>
                        <p>Entry of invoices, packing slips and CTEs. Creation and updates of spreadsheets;<br />
                            Receive and organize documents, register new products and stock control;<br />
                            Database updates;
                        </p>
                    </div>
                </div>
                <div className="education">
                    <h3>Formação</h3>
                    <div>
                        <h4>Uninassau<br />Análise e desenvolvimento de sistemas<br />Fevereiro 2021 - Junho 2023</h4>
                        <p>Projects done at college: Provocare and Days Manager</p>
                    </div>
                </div>
                <div className="hardskllis">
                    <h3>Tecnologias</h3>
                    <ul>
                        <li>React</li>
                        <li>Python</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Java</li>
                    </ul>
                    <h3>Idiomas</h3>
                    <ul>
                        <li>Português - nativo</li>
                        <li>Inglês - fluente</li>
                    </ul>
                </div>
            </section>
        </AreaResume>
    );
}

export default Resume;