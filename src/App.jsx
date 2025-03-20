import "./app.scss";
import { useState } from "react";
import perfil from "./assets/perfil.png";
import html from "./assets/html5.svg";
import sass from "./assets/sass.png";
import react from "./assets/react.png";
import css from "./assets/css3.svg";
import js from "./assets/javascript.svg";
import python from "./assets/python.webp";
import java from "./assets/java.webp";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import email from "./assets/email2.png";
import whats from "./assets/whatsapp.png";
import uhuuu from "./assets/uhuuuCell.png";
import nav from "./assets/navegador.png";
import avant from "./assets/avantCell.png";
import cadastro from "./assets/pythonCell.png";
import livros from "./assets/livrosCell.png";
import webstore from "./assets/webstoreCell.png";
import pepsi from "./assets/pepsiCell.png";
import anoNovo from "./assets/2025Cell.png";
import android from "./assets/androidCell.png";
import outubro from "./assets/outubroCell.png";

export default function App() {
  const [mostraExplicacaoHTML, setMostraExplicacaoHTML] = useState(false);
  const ativaExplicacaoHTML = () => {
    setMostraExplicacaoHTML(!mostraExplicacaoHTML);
  };

  const [mostraExplicacaoCSS, setMostraExplicacaoCSS] = useState(false);
  const ativaExplicacaoCSS = () => {
    setMostraExplicacaoCSS(!mostraExplicacaoCSS);
  };

  const [mostraExplicacaoSASS, setMostraExplicacaoSASS] = useState(false);
  const ativaExplicacaoSASS = () => {
    setMostraExplicacaoSASS(!mostraExplicacaoSASS);
  };

  const [mostraExplicacaoJS, setMostraExplicacaoJS] = useState(false);
  const ativaExplicacaoJS = () => {
    setMostraExplicacaoJS(!mostraExplicacaoJS);
  };

  const [mostraExplicacaoREACT, setMostraExplicacaoREACT] = useState(false);
  const ativaExplicacaoREACT = () => {
    setMostraExplicacaoREACT(!mostraExplicacaoREACT);
  };

  const [mostraExplicacaoPYTHON, setMostraExplicacaoPYTHON] = useState(false);
  const ativaExplicacaoPYTHON = () => {
    setMostraExplicacaoPYTHON(!mostraExplicacaoPYTHON);
  };

  const [mostraExplicacaoJAVA, setMostraExplicacaoJAVA] = useState(false);
  const ativaExplicacaoJAVA = () => {
    setMostraExplicacaoJAVA(!mostraExplicacaoJAVA);
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Alexandre Alves</h1>
          <nav>
            <ul>
              <li>
                <a href="#link1">Início</a>
              </li>
              <li>
                <a href="#link2">Skills and Softskills</a>
              </li>
              <li>
                <a href="#link3">Contatos</a>
              </li>
              <li>
                <a href="#link4">Projetos</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main" id="link1">
        <section className="sobre">
          <img
            src={perfil}
            alt="Foto do desenvolvedor Alexandre Alves, sorrindo, descontraído e de óculos escuros."
          />
          <div>
            <h3>Sobre mim</h3>
            <p>
              Olá, meu nome é Alexandre Alves e estou em transição de carreira
              para a área de tecnologia. Atualmente, curso o Técnico em
              Desenvolvimento de Sistemas na Escola Técnica de Pernambuco,
              aprofundando meus conhecimentos para criar soluções eficazes e
              inovadoras.
            </p>
            <p>
              Minha trajetória profissional teve início na área de
              administração, onde alcancei o título de mestre. No entanto, após
              anos de experiência, percebi que estava estagnado e sentia falta
              de novos desafios. Foi então que conheci o universo da tecnologia
              e, desde o primeiro contato, me apaixonei de forma intensa e
              definitiva por esse campo dinâmico e em constante evolução.
            </p>
            <p>
              Atuo no desenvolvimento de soluções personalizadas tanto no
              front-end quanto no back-end. No front-end, trabalho com HTML,
              CSS/Sass, JavaScript e React, criando interfaces modernas,
              responsivas e focadas na melhor experiência para o usuário. No
              back-end, utilizo Python e Java para desenvolver sistemas robustos
              e eficientes, sempre com foco em entregar resultados sólidos e de
              alta qualidade.
            </p>
            <p>
              Sou movido pela curiosidade e pelo desejo de aprimoramento
              contínuo. Estou sempre em busca de novos conhecimentos, explorando
              tecnologias emergentes e ferramentas que possam tornar minhas
              aplicações ainda mais eficientes e impactantes.
            </p>
            <p>
              Acredito firmemente que, com dedicação e colaboração, podemos
              realizar grandes coisas juntos. Estou pronto para enfrentar novos
              desafios, agregar valor com minhas habilidades e contribuir para o
              sucesso dos projetos em que estiver envolvido.
            </p>
            <p>
              Se você está em busca de um profissional comprometido, apaixonado
              por tecnologia e focado em resultados, adoraria ter a oportunidade
              de conversar e mostrar como posso ajudar a alcançar seus
              objetivos. Vamos construir algo incrível juntos!
            </p>
          </div>
        </section>
        <section className="skillsSoftskills" id="link2">
          <div className="tecnologias">
            <h3>Tecnologias conhecidas</h3>
            <div>
              <div className="tecExplicada">
                <img
                  src={html}
                  alt="Imagem logo do HTML 5."
                  onClick={ativaExplicacaoHTML}
                />
                {mostraExplicacaoHTML && (
                  <div className="explicacao1">
                    <h2>HTML5</h2>
                    <p>
                      O HTML5 (HyperText Markup Language 5) é a versão mais
                      recente da linguagem de marcação usada para estruturar
                      páginas da web. Ele trouxe melhorias significativas, como
                      suporte nativo a vídeos e áudios, novas tags semânticas,
                      maior integração com CSS e JavaScript, além de melhor
                      performance e compatibilidade com dispositivos móveis.
                    </p>
                  </div>
                )}
              </div>
              <div className="tecExplicada">
                <img
                  src={css}
                  alt="Imagem logo do CSS 3."
                  onClick={ativaExplicacaoCSS}
                />
                {mostraExplicacaoCSS && (
                  <div className="explicacao1">
                    <h2>CSS3</h2>
                    <p>
                      CSS3 (Cascading Style Sheets 3) é a versão mais recente do
                      CSS, usada para estilizar páginas da web. Ele introduziu
                      recursos avançados como gradientes, animações, flexbox,
                      grid, media queries (para design responsivo) e efeitos
                      visuais. Também melhorou o desempenho e a compatibilidade
                      com diferentes dispositivos.
                    </p>
                  </div>
                )}
              </div>
              <div className="tecExplicada">
                <img
                  src={sass}
                  alt="Imagem logo do SASS."
                  onClick={ativaExplicacaoSASS}
                />
                {mostraExplicacaoSASS && (
                  <div className="explicacao1">
                    <h2>SASS</h2>
                    <p>
                      SASS (Syntactically Awesome Stylesheets) é um
                      pré-processador de CSS que adiciona funcionalidades como
                      variáveis, aninhamento, mixins e herança, facilitando a
                      escrita e manutenção do código CSS.
                    </p>
                  </div>
                )}
              </div>
              <div className="tecExplicada">
                <img
                  src={js}
                  alt="Imagem logo do JavaScript."
                  onClick={ativaExplicacaoJS}
                />
                {mostraExplicacaoJS && (
                  <div className="explicacao1">
                    <h2>JAVASCRIPT</h2>
                    <p>
                      JavaScript (JS) é uma linguagem de programação voltada
                      para o desenvolvimento web. Ele permite criar páginas
                      interativas, manipulando HTML e CSS dinamicamente.
                    </p>
                  </div>
                )}
              </div>
              <div className="tecExplicada">
                <img
                  src={react}
                  alt="Imagem logo do React."
                  onClick={ativaExplicacaoREACT}
                />
                {mostraExplicacaoREACT && (
                  <div className="explicacao1">
                    <h2>REACT</h2>
                    <p>
                      React é uma biblioteca JavaScript para a criação de
                      interfaces de usuário interativas e eficientes. Ele
                      utiliza o conceito de componentes reutilizáveis e um
                      Virtual DOM para otimizar atualizações na página.
                    </p>
                  </div>
                )}
              </div>
              <div className="tecExplicada">
                <img
                  src={python}
                  alt="Imagem logo do Python."
                  onClick={ativaExplicacaoPYTHON}
                />
                {mostraExplicacaoPYTHON && (
                  <div className="explicacao2">
                    <h2>PYTHON</h2>
                    <p>
                      Python é uma linguagem de programação de alto nível,
                      conhecida por sua sintaxe simples e legibilidade. É
                      amplamente utilizada em desenvolvimento web, automação,
                      análise de dados, inteligência artificial e ciência de
                      dados, devido à sua vasta comunidade e bibliotecas
                      poderosas.
                    </p>
                  </div>
                )}
              </div>
              <div className="tecExplicada">
                <img
                  src={java}
                  alt="Imagem logo do Java."
                  onClick={ativaExplicacaoJAVA}
                />
                {mostraExplicacaoJAVA && (
                  <div className="explicacao2">
                    <h2>JAVA</h2>
                    <p>
                      Java é uma linguagem de programação orientada a objetos,
                      amplamente utilizada no desenvolvimento de aplicações
                      móveis, web e sistemas corporativos. Sua principal
                      característica é a portabilidade, permitindo que o código
                      seja executado em diferentes plataformas sem alterações,
                      graças à JVM (Java Virtual Machine).
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="idiomas">
            <h3>Idiomas</h3>
            <ul>
              <li>Português - nível fluente</li>
              <li>Inglês - nível intermediário</li>
              <li>Espanhol - nível básico</li>
            </ul>
          </div>
          <div className="softskills">
            <h3>Softskills</h3>
            <ul>
              <li>Pensamento lógico e analítico</li>
              <li>Atenção aos detalhes</li>
              <li>Comunicação clara e objetiva</li>
              <li>Trabalho em equipe</li>
              <li>Adaptabilidade</li>
              <li>Aprendizado contínuo</li>
              <li>Criatividade</li>
              <li>Empatia</li>
              <li>Responsabilidade</li>
              <li>Organização</li>
            </ul>
          </div>
        </section>
        <section id="link3">
          <div className="contatos">
            <h3>Contatos</h3>
            <div>
              <a
                href="https://www.linkedin.com/in/alexandre-alves-27135128a/"
                target="_blank"
              >
                <img src={linkedin} alt="Imagem logo do Linkedin." />
              </a>
              <a href="https://github.com/Xande-Alves" target="_blank">
                <img src={github} alt="Imagem logo do Github." />
              </a>
              <a href="mailto:alexandre.upe@gmail.com">
                <img
                  src={email}
                  alt="Imagem logo de uma carta que simboliza o e-mail."
                />
              </a>
              <a
                href="https://wa.me/5581988974954"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whats} alt="Imagem logo do Whatsapp." />
              </a>
            </div>
          </div>
        </section>
        <section className="projetos" id="link4">
          <h3>Projetos</h3>
          <div className="listaProjetos">
            <div>
              <img
                className="imgProjeto"
                src={uhuuu}
                alt="Imagem de celular com o site do Uhuuu!!!."
              />
              <div>
                <h4>Uhuuu!!!</h4>
                <p>
                  O Uhuuu!!! nasceu com a proposta de conectar pessoas a eventos
                  e estabelecimentos de entretenimento e lazer. Por meio de uma
                  plataforma intuitiva e envolvente, os usuários podem explorar
                  e descobrir eventos alinhados ao seu estado de espírito e
                  objetivos, tornando seus momentos de diversão mais assertivos
                  e memoráveis. Ao mesmo tempo, estabelecimentos e organizadores
                  têm a oportunidade de divulgar seus eventos, ampliando seu
                  alcance e aumentando as chances de sucesso. Com o Uhuuu!!!,
                  todos saem ganhando – mais diversão para quem busca
                  experiências e mais visibilidade para quem as oferece!
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={sass} alt="Imagem logo do SASS." />
                  <img src={js} alt="Imagem logo do JavaScript." />
                  <img src={react} alt="Imagem logo do React." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Uhuuu"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>

                  <a href="https://uhuuu.vercel.app/" target="_blank">
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={avant}
                alt="Imagem de celular com o site da Avant Turismo."
              />
              <div>
                <h4>Avant Turismo PE</h4>
                <p>
                  O site da Avant Turismo foi desenvolvido como parte do projeto
                  "Desenvolvimento de Comércio Eletrônico para Dispositivos Web
                  Aplicado em Agenciamento Turístico", realizado na Escola
                  Técnica de Pernambuco. Criamos uma plataforma moderna e
                  atraente para a empresa, com o objetivo de conquistar novos
                  clientes e fortalecer o negócio. Durante o processo,
                  implementamos novas funcionalidades, eliminamos recursos
                  obsoletos do antigo site e aprimoramos a experiência do
                  usuário. O resultado? Um site atualizado, eficiente e a plena
                  satisfação do cliente!
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={html} alt="Imagem logo do HTML 5." />
                  <img src={css} alt="Imagem logo do CSS 3." />
                  <img src={js} alt="Imagem logo do JavaScript." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a href="#" target="_blank">
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={cadastro}
                alt="Imagem de celular com a logo do Python."
              />
              <div>
                <h4>Cadastro de pessoas</h4>
                <p>
                  O projeto de cadastro de pessoas é uma aplicação simples em
                  Python, que permite registrar pessoas com os seguintes
                  atributos: nome, idade, endereço e curso. Os dados são
                  armazenados em uma lista, possibilitando, posteriormente,
                  listar todos os cadastrados ou realizar buscas e filtros com
                  base em qualquer um desses atributos. O projeto foi
                  desenvolvido utilizando o paradigma de programação orientada a
                  objetos, com uma classe Pessoa definida separadamente e
                  instanciada sempre que um novo cadastro é realizado.
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={python} alt="Imagem logo do Python." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Cadastro-python"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={livros}
                alt="Imagem de celular com o site Livros Vai na Web."
              />
              <div>
                <h4>Livros Vai na Web</h4>
                <p>
                  O Livros Vai na Web é um site dedicado a incentivar a doação
                  de livros que já não são utilizados, contribuindo para a
                  educação de outras pessoas. Com uma interface simples,
                  intuitiva e responsiva, o site foi desenvolvido como parte de
                  um desafio da comunidade Vai na Web.Atualmente, a integração
                  com o banco de dados está em desenvolvimento e em breve estará
                  disponível. Participe você também e ajude a transformar a
                  educação em sua cidade!
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={sass} alt="Imagem logo do SASS." />
                  <img src={js} alt="Imagem logo do JavaScript." />
                  <img src={react} alt="Imagem logo do React." />
                  <img src={python} alt="Imagem logo do Python." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Desafio-Livros-Vai-na-Web"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                  <a
                    href="https://desafio-livros-vai-na-web.vercel.app/"
                    target="_blank"
                  >
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={webstore}
                alt="Imagem de celular com o site Vai na WebStore."
              />
              <div>
                <h4>Vai na WebStore</h4>
                <p>
                  A Vai na WebStore é um site que simula uma loja virtual com
                  produtos fictícios. Nele, você pode explorar todos os itens
                  disponíveis ou filtrá-los por categorias para facilitar sua
                  busca. Ao encontrar um produto de interesse, é possível
                  adicioná-lo ou removê-lo da sua lista de compras. No final,
                  você pode revisar os itens selecionados e os detalhes da sua
                  compra na página do carrinho. Venha fazer suas compras na Vai
                  na WebStore!
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={sass} alt="Imagem logo do SASS." />
                  <img src={js} alt="Imagem logo do JavaScript." />
                  <img src={react} alt="Imagem logo do React." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Vai_na_WebStore"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                  <a
                    href="https://vai-na-web-store.vercel.app/"
                    target="_blank"
                  >
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={pepsi}
                alt="Imagem de celular com o site da Pepsi."
              />
              <div>
                <h4>Pepsi</h4>
                <p>
                  O site da Pepsi é simples, mas visualmente atraente. Com
                  funcionalidades como a troca de cores de plano de fundo,
                  mudança de imagens e deslize de itens, proporciona uma
                  experiência interativa e agradável para o usuário. Que tal
                  criar algo moderno e envolvente para o seu produto também?
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={sass} alt="Imagem logo do SASS." />
                  <img src={js} alt="Imagem logo do JavaScript." />
                  <img src={react} alt="Imagem logo do React." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Pepsi"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                  <a href="https://pepsi-inky.vercel.app/" target="_blank">
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={anoNovo}
                alt="Imagem de celular com o site do Feliz 2025!"
              />
              <div>
                <h4>Feliz 2025!</h4>
                <p>
                  O site Feliz 2025! foi criado para desejar um feliz ano novo à
                  comunidade de desenvolvedores, com um poema personalizado
                  dedicado à área de tecnologia. Feliz 2025 para você também!
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={sass} alt="Imagem logo do SASS." />
                  <img src={js} alt="Imagem logo do JavaScript." />
                  <img src={react} alt="Imagem logo do React." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Feliz_2025"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                  <a href="https://feliz-2025.vercel.app/" target="_blank">
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={cadastro}
                alt="Imagem de celular com a logo do Python."
              />
              <div>
                <h4>O código secreto</h4>
                <p>
                  O Código Secreto foi um desafio lançado pela comunidade Vai na
                  Web que, a princípio, era simples. No entanto, dei um passo
                  além e tornei o programa inquebrável, implementando validações
                  e tratamento de erros para lidar com possíveis respostas
                  incorretas fornecidas pelo usuário. Desafio você a quebrá-lo!
                  😉
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={python} alt="Imagem logo do Python." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Realizando-missoes-VNW"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={android}
                alt="Imagem de celular com o site Curiosidades sobre tecnologia."
              />
              <div>
                <h4>Curiosidades sobre tecnologia</h4>
                <p>
                  O site Curiosidades sobre tecnologia foi elaborado para
                  trazer, nessa matéria, a história do mascote do sistema
                  operacional Android. Talvez você não saiba que o seu simpático
                  mascote tem um nome e uma história muito curiosa? Pois
                  acompanhe esse artigo para aprender muita coisa sobre esse
                  robozinho.
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={html} alt="Imagem logo do HTML 5." />
                  <img src={css} alt="Imagem logo do CSS 3." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Site-Android"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                  <a
                    href="https://site-android-six.vercel.app/"
                    target="_blank"
                  >
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="imgProjeto"
                src={outubro}
                alt="Imagem de celular com o site Outubro Rosa."
              />
              <div>
                <h4>Outubro Rosa</h4>
                <p>
                  O site Outubro Rosa foi criado para conscientizar sobre a
                  importância da prevenção e do diagnóstico precoce do câncer de
                  mama. Por meio de diversos eventos e iniciativas, a campanha
                  reúne pessoas engajadas em apoiar a causa e reforçar a
                  importância do autocuidado. Cuide-se!
                </p>
                <h4>Principais tecnologias</h4>
                <div className="projetoTec">
                  <img src={html} alt="Imagem logo do HTML 5." />
                  <img src={css} alt="Imagem logo do CSS 3." />
                </div>
                <h4>Links</h4>
                <div className="projetoLink">
                  <a
                    href="https://github.com/Xande-Alves/Outubro-Rosa"
                    target="_blank"
                  >
                    <img src={github} alt="Imagem logo do Github." />
                  </a>
                  <a
                    href="https://outubro-rosa-jet.vercel.app/"
                    target="_blank"
                  >
                    <img
                      src={nav}
                      alt="Imagem de um monitor rodando uma aplicação."
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
