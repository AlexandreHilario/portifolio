import image from "./Assets/Img.jpg"
import './App.css';



function App() {
  return (
    <div className="App">
      <div className='header'>
        <div>
          <h1>Alexandre Vitor</h1>
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
      <div className="conteiner">
        <img className="image" src={image} alt="foto de perfil"></img>
        <div>
          <h3> Hello, Welcome to my page </h3>
          <p>I'm 20 years old and I'm looking for new challenges to improve my skills. I finished my degree and am currently a technologist in systems analysis and development</p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/hil4ri0"
                target="_blank"
                rel="noreferrer">
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexandre-vitor-hil%C3%A1rio-a6392a204/"
                target="_blank"
                rel="noreferrer">
                linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/alexandrehilario/"
                target="_blank"
                rel="noreferrer">
                github
              </a>
            </li>
          </ul>
        </div>
      </div>
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

      <section id="projetos" className="projetos">

      </section>

      <section id="contato" className="contato">
        <div className="cartao">
          <h3>Phone</h3>
          <h4>81 98463-0413</h4>
          <h3>Email</h3>
          <h4>xandibackup@gmail.com</h4>
        </div>
      </section>
      <footer>
        <p>© 2023 por Alexandre Vitor</p>
      </footer>
    </div>
  );
}

export default App;
