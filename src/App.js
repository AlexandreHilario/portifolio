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
      <div className="container">
        <div className="Card">
          <img className="image" src={image} alt="foto de perfil"></img>
          <div>
            <h3> Hello, Welcome to my page </h3>
            <p> I'm 20 years old and I'm looking for new challenges to improve my skills. I finished my degree and am currently a technologist in systems analysis and development.<br/>
              In the journey I have been on, my main objective is constant learning and sharing the knowledge acquired. I believe that this mutual exchange of wisdom is fundamental and relevant, as I recognize that we are in constant development, always seeking to improve our skills.<br/>
              I am open to facing new challenges, as long as they give me satisfaction in what I am doing. In such situations, I will be fully committed and dedicated, giving my best.</p>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/oxande_hilario"
                  target="_blank"
                  rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexandre-vitor-hil%C3%A1rio-a6392a204/"
                  target="_blank"
                  rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/alexandrehilario/"
                  target="_blank"
                  rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
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
