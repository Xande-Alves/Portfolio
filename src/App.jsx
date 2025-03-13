import "./app.scss";
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

export default function App() {
  return (
    <>
      <header className="header">
        <div>
          <h1>Alexandre Alves</h1>
          <nav>
            <ul>
              <li>Início</li>
              <li>Skills and Softskills</li>
              <li>Contatos</li>
              <li>Projetos</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
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
        <section className="skillsSoftskills">
          <div className="tecnologias">
            <h3>Tecnologias conhecidas</h3>
            <div>
              <img src={html} alt="Imagem logo do HTML 5." />
              <img src={css} alt="Imagem logo do CSS 3." />
              <img src={sass} alt="Imagem logo do SASS." />
              <img src={js} alt="Imagem logo do JavaScript." />
              <img src={react} alt="Imagem logo do React." />
              <img src={python} alt="Imagem logo do Python." />
              <img src={java} alt="Imagem logo do Java." />
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
        <section>
          <div className="contatos">
            <h3>Contatos</h3>
            <div>
              <img src={linkedin} alt="Imagem logo do Linkedin." />
              <img src={github} alt="Imagem logo do Github." />
              <img
                src={email}
                alt="Imagem logo de uma carta que simboliza o e-mail."
              />
              <img src={whats} alt="Imagem logo do Whatsapp." />
            </div>
          </div>
        </section>
        <section className="projetos">
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
                  <img src={github} alt="Imagem logo do Github." />
                  <img
                    src={nav}
                    alt="Imagem de um monitor rodando uma aplicação."
                  />
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
                  <img src={github} alt="Imagem logo do Github." />
                  <img
                    src={nav}
                    alt="Imagem de um monitor rodando uma aplicação."
                  />
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
                  <img src={github} alt="Imagem logo do Github." />
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
                  <img src={github} alt="Imagem logo do Github." />
                  <img
                    src={nav}
                    alt="Imagem de um monitor rodando uma aplicação."
                  />
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
                <h4>Livros Vai na Web</h4>
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
                  <img src={github} alt="Imagem logo do Github." />
                  <img
                    src={nav}
                    alt="Imagem de um monitor rodando uma aplicação."
                  />
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
                  <img src={github} alt="Imagem logo do Github." />
                  <img
                    src={nav}
                    alt="Imagem de um monitor rodando uma aplicação."
                  />
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
                  <img src={github} alt="Imagem logo do Github." />
                  <img
                    src={nav}
                    alt="Imagem de um monitor rodando uma aplicação."
                  />
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
                  <img src={github} alt="Imagem logo do Github." />
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
                  <img src={github} alt="Imagem logo do Github." />
                  <img
                    src={nav}
                    alt="Imagem de um monitor rodando uma aplicação."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
