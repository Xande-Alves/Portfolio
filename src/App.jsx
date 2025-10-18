import './app.scss';
import { useState, useEffect, useRef } from 'react';
import perfil from './assets/perfil.png';
import html from './assets/html5.svg';
import sass from './assets/sass.png';
import react from './assets/react.png';
import css from './assets/css3.svg';
import js from './assets/javascript.svg';
import python from './assets/python.webp';
import java from './assets/java.webp';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import email from './assets/email2.png';
import whats from './assets/whatsapp.png';
import uhuuu from './assets/uhuuuCell.png';
import inboxai from './assets/inboxai.png';
import nav from './assets/navegador.png';
import avant from './assets/avantCell.png';
import cybersec1 from './assets/cybersec.png';
import javacell from './assets/javacell.png';
import cadastro from './assets/pythonCell.png';
import livros from './assets/livrosCell.png';
import portfolio from './assets/portfolioCell.png';
import webstore from './assets/webstoreCell.png';
import pepsi from './assets/pepsiCell.png';
import anoNovo from './assets/2025Cell.png';
import android from './assets/androidCell.png';
import outubro from './assets/outubroCell.png';
import githubB from './assets/githubBranco.png';
import navB from './assets/navegadorB.png';
import navP from './assets/navegadorP.png';
import linkedinB from './assets/linkedinB.png';
import emailB from './assets/emailB.png';
import whatsB from './assets/whatsappB.png';
import logo from './assets/logoT2.png';
import linkedinP from './assets/linkedinP.png';
import githubP from './assets/githubP.png';
import emailP from './assets/emailP.png';
import whatsP from './assets/whatsappP.png';

const projetos = [
  {
    titulo: 'Uhuuu!!!',
    descricao:
      'O Uhuuu!!! nasceu com a proposta de conectar pessoas a eventos e estabelecimentos de entretenimento e lazer. Por meio de uma plataforma intuitiva e envolvente, os usuários podem explorar e descobrir eventos alinhados ao seu estado de espírito e objetivos, tornando seus momentos de diversão mais assertivos e memoráveis. Ao mesmo tempo, estabelecimentos e organizadores têm a oportunidade de divulgar seus eventos, ampliando seu alcance e aumentando as chances de sucesso. Com o Uhuuu!!!, todos saem ganhando – mais diversão para quem busca experiências e mais visibilidade para quem as oferece!',
    imagem: uhuuu,
    altImagem: 'Imagem de celular com o site do Uhuuu!!!.',
    tecnologias: [
      { imagem: sass, alt: 'Imagem logo do SASS.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
      { imagem: react, alt: 'Imagem logo do React.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Uhuuu',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://uhuuu.vercel.app/',
      },
    ],
  },
  {
    titulo: 'InboxAI',
    descricao:
      'Um classificador de e-mails para uma empresa fictícia do setor financeiro chamada CAPITAL. A solução utiliza conexão com a OpenAI e se essa conexão falhar de alguma forma, entra no modelo local de respostas. Todas as instruções para poder rodar localmente, utilizando a API key da OpenAI, está no README. No link direto está utilizando o modelo de IA local.',
    imagem: inboxai,
    altImagem: 'Imagem de celular com o site do InboxAI.',
    tecnologias: [
      { imagem: html, alt: 'Imagem logo do HTML.' },
      { imagem: css, alt: 'Imagem logo do CSS.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
      { imagem: python, alt: 'Imagem logo do Python.' }
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/InboxAI',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://inboxai-h0vw.onrender.com/',
      },
    ],
  },
  {
    titulo: 'Livros Vai na Web',
    descricao:
      'O Livros Vai na Web é um site dedicado a incentivar a doação de livros que já não são utilizados, contribuindo para a educação de outras pessoas. Com uma interface simples, intuitiva e responsiva, o site foi desenvolvido como parte de um desafio da comunidade Vai na Web.Atualmente, a integração com o banco de dados está em desenvolvimento e em breve estará disponível. Participe você também e ajude a transformar a educação em sua cidade!',
    imagem: livros,
    altImagem: 'Imagem de celular com o site Livros Vai na Web.',
    tecnologias: [
      { imagem: sass, alt: 'Imagem logo do SASS.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
      { imagem: react, alt: 'Imagem logo do React.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Desafio-Livros-Vai-na-Web',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://desafio-livros-vai-na-web.vercel.app/',
      },
    ],
  },
  {
    titulo: 'API Livros Vai na Web',
    descricao:
      'A API Livros Vai na Web é a parte de back-end que será integrada ao site Livros Vai na Web, permitindo assim acesso ao banco de dados. Depois de integrada, o usuário poderá cadastrar os livros que quer doar e ainda listar os livros doados. Tudo pela educação!!',
    imagem: cadastro,
    altImagem: 'Imagem de celular com a logo do Python.',
    tecnologias: [{ imagem: python, alt: 'Imagem logo do Python.' }],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/API_livros',
      },
    ],
  },
  {
    titulo: 'Portfólio',
    descricao:
      'Este é o portfólio onde você se encontra! Resolvi postar aqui também para quem quisesse um link rápido para acessar o Github. Talvez possa inspirar ou servir para tirar alguma dúvida de algum outro desenvolvedor. Estamos juntos!!',
    imagem: portfolio,
    altImagem: 'Imagem de celular com o site do Portfólio de Alexandre Alves.',
    tecnologias: [
      { imagem: sass, alt: 'Imagem logo do SASS.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
      { imagem: react, alt: 'Imagem logo do React.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Portfolio',
      },
    ],
  },
  {
    titulo: 'Vai na WebStore',
    descricao:
      'A Vai na WebStore é um site que simula uma loja virtual com produtos fictícios. Nele, você pode explorar todos os itens disponíveis ou filtrá-los por categorias para facilitar sua busca. Ao encontrar um produto de interesse, é possível adicioná-lo ou removê-lo da sua lista de compras. No final, você pode revisar os itens selecionados e os detalhes da sua compra na página do carrinho. Venha fazer suas compras na Vai na WebStore!',
    imagem: webstore,
    altImagem: 'Imagem de celular com o site Vai na WebStore.',
    tecnologias: [
      { imagem: sass, alt: 'Imagem logo do SASS.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
      { imagem: react, alt: 'Imagem logo do React.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Vai_na_WebStore',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://vai-na-web-store.vercel.app/',
      },
    ],
  },
  {
    titulo: 'Avant Turismo PE',
    descricao:
      'O site da Avant Turismo foi desenvolvido como parte do projeto Desenvolvimento de Comércio Eletrônico para Dispositivos Web Aplicado em Agenciamento Turístico, realizado na Escola Técnica de Pernambuco. Criamos uma plataforma moderna e atraente para a empresa, com o objetivo de conquistar novos clientes e fortalecer o negócio. Durante o processo, implementamos novas funcionalidades, eliminamos recursos obsoletos do antigo site e aprimoramos a experiência do usuário. O resultado? Um site atualizado, eficiente e a plena satisfação do cliente!',
    imagem: avant,
    altImagem: 'Imagem de celular com site da Avant Turismo.',
    tecnologias: [
      { imagem: html, alt: 'Imagem logo do HTML 5.' },
      { imagem: css, alt: 'Imagem logo do CSS 3.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
    ],
    links: [
      { imagem: github, alt: 'Imagem logo do Github.', url: 'https://github.com/Xande-Alves/Avant_Turismo' },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://avant-turismo.vercel.app/',
      },
    ],
  },
  {
    titulo: 'API em Java',
    descricao:
      'API em Java, springboot, conexão mysql e swagger. Atentar para mudar usuário e senha do MySql no aplication.properties, se for rodar localmente.',
    imagem: javacell,
    altImagem: 'Imagem de celular com a logo do Java.',
    tecnologias: [
      { imagem: java, alt: 'Imagem logo do Java.' }
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/API_JAVA',
      },
    ],
  },
  {
    titulo: 'Relatório de Cibersegurança 1',
    descricao:
      'Relatório do curso de Formação em Cibersegurança Kensei/Vai na Web - Módulo 1',
    imagem: cybersec1,
    altImagem: 'Imagem de celular com o um cadeado cybernético.',
    tecnologias: [
      
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Relatorio_Cybersecurity_M1',
      }
    ],
  },
  {
    titulo: 'Cadastro de pessoas',
    descricao:
      'O projeto de cadastro de pessoas é uma aplicação simples em Python, que permite registrar pessoas com os seguintes atributos: nome, idade, endereço e curso. Os dados são armazenados em uma lista, possibilitando, posteriormente, listar todos os cadastrados ou realizar buscas e filtros com base em qualquer um desses atributos. O projeto foi desenvolvido utilizando o paradigma de programação orientada a objetos, com uma classe Pessoa definida separadamente e instanciada sempre que um novo cadastro é realizado.',
    imagem: cadastro,
    altImagem: 'Imagem de celular com a logo do Python.',
    tecnologias: [{ imagem: python, alt: 'Imagem logo do Python.' }],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Cadastro-python',
      },
    ],
  },
  {
    titulo: 'Pepsi',
    descricao:
      'O site da Pepsi é simples, mas visualmente atraente. Com funcionalidades como a troca de cores de plano de fundo, mudança de imagens e deslize de itens, proporciona uma experiência interativa e agradável para o usuário. Que tal criar algo moderno e envolvente para o seu produto também?',
    imagem: pepsi,
    altImagem: 'Imagem de celular com o site da Pepsi.',
    tecnologias: [
      { imagem: sass, alt: 'Imagem logo do SASS.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
      { imagem: react, alt: 'Imagem logo do React.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Pepsi',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://pepsi-inky.vercel.app/',
      },
    ],
  },
  {
    titulo: 'O código secreto',
    descricao:
      'O Código Secreto foi um desafio lançado pela comunidade Vai na Web que, a princípio, era simples. No entanto, dei um passo além e tornei o programa inquebrável, implementando validações e tratamento de erros para lidar com possíveis respostas incorretas fornecidas pelo usuário. Desafio você a quebrá-lo!😉',
    imagem: cadastro,
    altImagem: 'Imagem de celular com a logo do Python.',
    tecnologias: [{ imagem: python, alt: 'Imagem logo do Python.' }],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Realizando-missoes-VNW',
      },
    ],
  },
  {
    titulo: 'Feliz 2025!',
    descricao:
      'O site Feliz 2025! foi criado para desejar um feliz ano novo à comunidade de desenvolvedores, com um poema personalizado dedicado à área de tecnologia. Feliz 2025 para você também!',
    imagem: anoNovo,
    altImagem: 'Imagem de celular com o site do Feliz 2025!',
    tecnologias: [
      { imagem: sass, alt: 'Imagem logo do SASS.' },
      { imagem: js, alt: 'Imagem logo do JavaScript.' },
      { imagem: react, alt: 'Imagem logo do React.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Feliz_2025',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://feliz-2025.vercel.app/',
      },
    ],
  },
  {
    titulo: 'Curiosidades Sobre Tecnologia',
    descricao:
      'O site Curiosidades sobre tecnologia foi elaborado para trazer, nessa matéria, a história do mascote do sistema operacional Android. Talvez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.',
    imagem: android,
    altImagem: 'Imagem de celular com site do Curiosidades Sobre Tecnologia.',
    tecnologias: [
      { imagem: html, alt: 'Imagem logo do HTML 5.' },
      { imagem: css, alt: 'Imagem logo do CSS 3.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Site-Android',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://site-android-six.vercel.app/',
      },
    ],
  },
  {
    titulo: 'Outubro Rosa',
    descricao:
      'O site Outubro Rosa foi criado para conscientizar sobre a importância da prevenção e do diagnóstico precoce do câncer de mama. Por meio de diversos eventos e iniciativas, a campanha reúne pessoas engajadas em apoiar a causa e reforçar a importância do autocuidado. Cuide-se!',
    imagem: outubro,
    altImagem: 'Imagem de celular com site do Outubro Rosa.',
    tecnologias: [
      { imagem: html, alt: 'Imagem logo do HTML 5.' },
      { imagem: css, alt: 'Imagem logo do CSS 3.' },
    ],
    links: [
      {
        imagem: github,
        alt: 'Imagem logo do Github.',
        url: 'https://github.com/Xande-Alves/Outubro-Rosa',
      },
      {
        imagem: nav,
        alt: 'Imagem de um monitor rodando uma aplicação.',
        url: 'https://outubro-rosa-jet.vercel.app/',
      },
    ],
  },
];

export default function App() {
  //MUDA MODO ESCURO/CLARO
  const [isDark, setIsDark] = useState(true);
  const [isDark2, setIsDark2] = useState(true);
  const [nomeBotao, setNomeBotao] = useState('Modo Claro');
  const toggleBackground = () => {
    setIsDark(!isDark);
    setIsDark2(!isDark2);
    if (nomeBotao === 'Modo Claro') {
      setNomeBotao('Modo Escuro');
    } else {
      setNomeBotao('Modo Claro');
    }
  };

  //MUDANÇA DE COR DOS ICONES DAS TECNOLOGIAS CONHECIDAS
  const [iconeTecGithub, setIconeTecGithub] = useState(github);
  const [iconeTecLinkedin, setIconeTecLinkedin] = useState(linkedin);
  const [iconeTecEmail, setIconeTecEmail] = useState(email);
  const [iconeTecWhatsapp, setIconeTecWhatsapp] = useState(whats);

  //LOGICA DE EXPLICAÇÃO DAS TECNOLOGIAS CONHECIDAS
  const [explicacaoAtiva, setExplicacaoAtiva] = useState(null);
  const explicacaoRef = useRef(null);

  const ativaExplicacao = (tecnologia) => {
    setExplicacaoAtiva(explicacaoAtiva === tecnologia ? null : tecnologia);
  };
  // Adiciona o evento de clique para fechar a explicação quando clicar fora
  useEffect(() => {
    const handleClickFora = (event) => {
      if (
        explicacaoRef.current &&
        !explicacaoRef.current.contains(event.target)
      ) {
        setExplicacaoAtiva(null);
      }
    };

    document.addEventListener('click', handleClickFora);

    return () => {
      document.removeEventListener('click', handleClickFora);
    };
  }, []);

  //MUDANÇA DE COR DOS ICONES DOS LINKS DOS PROJETOS
  const [hoveredImage, setHoveredImage] = useState({});

  //MENU ESCONDIDO EM TELAS MENORES QUE 800PX
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  //RENDERIZAÇÃO DOS PROJETOS EM TELAS MENORES QUE 800PX
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className={`header ${isDark ? 'dark' : 'light'}`}>
        <div className="divHeader">
          <div className="alexandre">
            <h1>Alexandre Alves</h1>
            <h2>Desenvolvedor Full Stack</h2>
          </div>
          <div className="divNavModo">
            <nav>
              <ul>
                <li>
                  <a href="#link1" className={`${isDark ? 'dark' : 'light'}`}>
                    Início
                  </a>
                </li>
                <li>
                  <a href="#link2" className={`${isDark ? 'dark' : 'light'}`}>
                    Skills and Softskills
                  </a>
                </li>
                <li>
                  <a href="#link3" className={`${isDark ? 'dark' : 'light'}`}>
                    Contatos
                  </a>
                </li>
                <li>
                  <a href="#link4" className={`${isDark ? 'dark' : 'light'}`}>
                    Projetos
                  </a>
                </li>
              </ul>
            </nav>
            <div className="modo">
              <button
                className={`${isDark ? 'light' : 'dark'}`}
                onClick={toggleBackground}
              >
                {nomeBotao}
              </button>
            </div>
          </div>
          {isMobile && (
            <>
              <button
                className="menu-button"
                onClick={(e) => {
                  e.stopPropagation(); // Evita que o clique no botão feche o menu
                  setMenuOpen(!menuOpen);
                }}
              >
                ☰ Menu
              </button>
              {menuOpen && (
                <div className="divNavModoMobile" ref={menuRef}>
                  <nav>
                    <ul>
                      <li>
                        <a
                          href="#link1"
                          className={`${isDark ? 'dark' : 'light'}`}
                        >
                          Início
                        </a>
                      </li>
                      <li>
                        <a
                          href="#link2"
                          className={`${isDark ? 'dark' : 'light'}`}
                        >
                          Skills and Softskills
                        </a>
                      </li>
                      <li>
                        <a
                          href="#link3"
                          className={`${isDark ? 'dark' : 'light'}`}
                        >
                          Contatos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#link4"
                          className={`${isDark ? 'dark' : 'light'}`}
                        >
                          Projetos
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="modo">
                    <button
                      className={`${isDark ? 'light' : 'dark'}`}
                      onClick={toggleBackground}
                    >
                      {nomeBotao}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </header>
      <main className="main" id="link1">
        <section className={`sobre ${isDark2 ? 'dark2' : 'light2'}`}>
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
        <section
          className={`skillsSoftskills ${isDark ? 'dark' : 'light'}`}
          id="link2"
        >
          <div className="tecnologias">
            <h3>Tecnologias conhecidas</h3>
            <div ref={explicacaoRef}>
              <div className="tecExplicada">
                <img
                  src={html}
                  alt="Imagem logo do HTML 5."
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que o clique no próprio item feche a explicação
                    ativaExplicacao('HTML');
                  }}
                />
                {explicacaoAtiva === 'HTML' && (
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
                  onClick={() => ativaExplicacao('CSS')}
                />
                {explicacaoAtiva === 'CSS' && (
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
                  onClick={() => ativaExplicacao('SASS')}
                />
                {explicacaoAtiva === 'SASS' && (
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
                  onClick={() => ativaExplicacao('JS')}
                />
                {explicacaoAtiva === 'JS' && (
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
                  onClick={() => ativaExplicacao('REACT')}
                />
                {explicacaoAtiva === 'REACT' && (
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
                  onClick={() => ativaExplicacao('PYTHON')}
                />
                {explicacaoAtiva === 'PYTHON' && (
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
                  onClick={() => ativaExplicacao('JAVA')}
                />
                {explicacaoAtiva === 'JAVA' && (
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
          <div className={`contatos ${isDark2 ? 'dark2' : 'light2'}`}>
            <h3>Contatos</h3>
            <div>
              <a
                href="https://www.linkedin.com/in/alexandre-alves-27135128a/"
                target="_blank"
              >
                <img
                  src={iconeTecLinkedin}
                  alt="Imagem logo do Linkedin."
                  onMouseEnter={() => {
                    if (nomeBotao === 'Modo Claro') {
                      setIconeTecLinkedin(linkedinB);
                    } else {
                      setIconeTecLinkedin(linkedinP);
                    }
                  }}
                  onMouseLeave={() => setIconeTecLinkedin(linkedin)}
                />
              </a>
              <a href="https://github.com/Xande-Alves" target="_blank">
                <img
                  src={iconeTecGithub}
                  alt="Imagem logo do Github."
                  onMouseEnter={() => {
                    if (nomeBotao === 'Modo Claro') {
                      setIconeTecGithub(githubB);
                    } else {
                      setIconeTecGithub(githubP);
                    }
                  }}
                  onMouseLeave={() => setIconeTecGithub(github)}
                />
              </a>
              <a href="mailto:alexandre.upe@gmail.com">
                <img
                  src={iconeTecEmail}
                  alt="Imagem logo de uma carta que simboliza o e-mail."
                  onMouseEnter={() => {
                    if (nomeBotao === 'Modo Claro') {
                      setIconeTecEmail(emailB);
                    } else {
                      setIconeTecEmail(emailP);
                    }
                  }}
                  onMouseLeave={() => setIconeTecEmail(email)}
                />
              </a>
              <a
                href="https://wa.me/5581988974954"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={iconeTecWhatsapp}
                  alt="Imagem logo do Whatsapp."
                  onMouseEnter={() => {
                    if (nomeBotao === 'Modo Claro') {
                      setIconeTecWhatsapp(whatsB);
                    } else {
                      setIconeTecWhatsapp(whatsP);
                    }
                  }}
                  onMouseLeave={() => setIconeTecWhatsapp(whats)}
                />
              </a>
            </div>
          </div>
        </section>
        <section className={`projetos ${isDark ? 'dark' : 'light'}`} id="link4">
          <h3>Projetos</h3>
          <div className="listaProjetos">
            {projetos.map((projeto, index) => (
              <div key={index} className="projeto">
                <img
                  src={projeto.imagem}
                  alt={projeto.altImagem}
                  className="imgProjeto"
                />
                <div>
                  <h4>{projeto.titulo}</h4>
                  <p>{projeto.descricao}</p>

                  <h4>Principais tecnologias</h4>
                  <div className="projetoTec">
                    {projeto.tecnologias.map((tec, idx) => (
                      <img key={idx} src={tec.imagem} alt={tec.alt} />
                    ))}
                  </div>

                  <h4>Links</h4>
                  <div className="projetoLink">
                    {projeto.links.map((link, linkIdx) => {
                      const uniqueKey = `${index}-${linkIdx}`; // Chave única para cada link (combinando o índice do projeto e o índice do link)
                      return (
                        <a
                          key={uniqueKey}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={hoveredImage[uniqueKey] || link.imagem} // Usa a imagem de hover ou a original
                            alt={link.alt}
                            onMouseEnter={() => {
                              if (link.imagem === github) {
                                if (nomeBotao === 'Modo Claro') {
                                  setHoveredImage((prev) => ({
                                    ...prev,
                                    [uniqueKey]: githubB,
                                  }));
                                } else {
                                  setHoveredImage((prev) => ({
                                    ...prev,
                                    [uniqueKey]: githubP,
                                  }));
                                }
                              } else {
                                if (nomeBotao === 'Modo Claro') {
                                  setHoveredImage((prev) => ({
                                    ...prev,
                                    [uniqueKey]: navB,
                                  }));
                                } else {
                                  setHoveredImage((prev) => ({
                                    ...prev,
                                    [uniqueKey]: navP,
                                  }));
                                }
                              }
                            }}
                            onMouseLeave={() => {
                              setHoveredImage((prev) => {
                                const newState = { ...prev };
                                delete newState[uniqueKey]; // Remove a imagem de hover para esse link específico
                                return newState;
                              });
                            }}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="listaProjetosMobile">
            {projetos.map((projeto, index) => (
              <div key={index} className="projeto">
                <div className="tituloDesc">
                  <h4>{projeto.titulo}</h4>
                  <p>{projeto.descricao}</p>
                </div>
                <div className="imgInfos">
                  <div className="imgMobile">
                    <img
                      src={projeto.imagem}
                      alt={projeto.altImagem}
                      className="imgProjeto"
                    />
                  </div>

                  <div className="infos">
                    <h4>Principais tecnologias</h4>
                    <div className="projetoTec">
                      {projeto.tecnologias.map((tec, idx) => (
                        <img key={idx} src={tec.imagem} alt={tec.alt} />
                      ))}
                    </div>

                    <h4>Links</h4>
                    <div className="projetoLink">
                      {projeto.links.map((link, linkIdx) => {
                        const uniqueKey = `${index}-${linkIdx}`;

                        return (
                          <a
                            key={uniqueKey}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={hoveredImage[uniqueKey] || link.imagem}
                              alt={link.alt}
                              onMouseEnter={() => {
                                if (link.imagem === github) {
                                  setHoveredImage((prev) => ({
                                    ...prev,
                                    [uniqueKey]:
                                      nomeBotao === 'Modo Claro'
                                        ? githubB
                                        : githubP,
                                  }));
                                } else {
                                  setHoveredImage((prev) => ({
                                    ...prev,
                                    [uniqueKey]:
                                      nomeBotao === 'Modo Claro' ? navB : navP,
                                  }));
                                }
                              }}
                              onMouseLeave={() => {
                                setHoveredImage((prev) => {
                                  const newState = { ...prev };
                                  delete newState[uniqueKey];
                                  return newState;
                                });
                              }}
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className={`footer ${isDark2 ? 'dark2' : 'light2'}`}>
        <div>
          <img
            src={logo}
            alt="Logo do desenvolvedor Alexandre Alves, um A circunscrito em uma espécie de yin yang."
          />
          <p>Copyright © 2025 by Alexandre Alves. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
