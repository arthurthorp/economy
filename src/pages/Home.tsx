import React from 'react';
import { Link } from 'react-router-dom';

import Aside from '../components/Aside';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import New from '../components/New';
import Goal from '../components/Goal';
import Footer from '../components/Footer';

import IntroducaoImg from '../assets/img/introducao.jpg';
import NoticiaImg from '../assets/img/noticia.jpg';
import MetaImg from '../assets/img/meta.jpg';

const Home: React.FC = () => {
  return (
    <>
      <Aside page="home" />
      <main>
        <section className="container" id="section-introduction">
          <h2>Introdução</h2>
          <div className="box-text-content">
            <img
              src={IntroducaoImg}
              alt="mesa com notebooks e pessoas discutindo um projeto"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              a metus ligula. Morbi eu lacinia lectus. Aenean est lacus,
              hendrerit ac volutpat quis, finibus in purus. Sed rhoncus sodales
              nisl non molestie. Praesent nec porttitor erat. Aliquam posuere
              magna et porta pretium. Vivamus at vehicula turpis, ac posuere
              dui. Cras vel lacus nec leo maximus vulputate id ac sem. Cras ac
              consequat enim, ac pharetra nunc. Ut a hendrerit nunc, vitae
              consectetur tellus. Nullam vitae eros eu ex cursus finibus nec in
              leo. Duis hendrerit arcu finibus velit dictum, sed lobortis mauris
              ultrices. Mauris pulvinar elementum neque, in rutrum ex efficitur
              a.
            </p>
          </div>
          <Button>
            <Link to="/introducao">Ver mais</Link>
          </Button>
        </section>

        <section className="container" id="section-scenery-operates">
          <h2>Cenário atual</h2>

          <div className="box-content">
            <div className="list-progress">
              <ProgressBar title="Brasil" color=" #28B463" progress={60} />
              <ProgressBar title="EUA" color=" #F39C12" progress={70} />
              <ProgressBar title="Portugal" color=" #CB4335" progress={80} />
              <ProgressBar title="Madagascar" color=" #2980B9" progress={30} />
              <ProgressBar title="Colômbia" color="  #9B59B6" progress={52} />
            </div>

            <div className="text-progress">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas a metus ligula. Morbi eu lacinia lectus. Aenean est
                lacus, hendrerit ac volutpat quis, finibus in purus. Sed rhoncus
                sodales nisl non molestie. Praesent nec porttitor erat. Aliquam
                posuere magna et porta pretium. Vivamus at vehicula turpis, ac
                posuere dui. Cras vel lacus nec leo maximus vulputate id ac sem.
                Cras ac consequat enim, ac pharetra nunc. Ut a hendrerit nunc,
                vitae consectetur tellus.
              </p>

              <Button>
                <Link to="/cenario-atual">Ver mais</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container" id="section-news">
          <h2>Notícias</h2>

          <div className="box-news">
            <New
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas a metus ligula. Morbi eu lacinia lectus. Aenean est
              lacus, hendrerit ac volutpat quis, finibus in purus. Sed rhoncus
              sodales nisl non molestie. Praesent nec porttitor erat."
            >
              <img src={NoticiaImg} alt="Grafico em barras crescente" />
            </New>
            <New
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas a metus ligula. Morbi eu lacinia lectus. Aenean est
              lacus, hendrerit ac volutpat quis, finibus in purus. Sed rhoncus
              sodales nisl non molestie. Praesent nec porttitor erat."
            >
              <img src={NoticiaImg} alt="Grafico em barras crescente" />
            </New>
            <New
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas a metus ligula. Morbi eu lacinia lectus. Aenean est
              lacus, hendrerit ac volutpat quis, finibus in purus. Sed rhoncus
              sodales nisl non molestie. Praesent nec porttitor erat."
            >
              <img src={NoticiaImg} alt="Grafico em barras crescente" />
            </New>
            <New
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas a metus ligula. Morbi eu lacinia lectus. Aenean est
              lacus, hendrerit ac volutpat quis, finibus in purus. Sed rhoncus
              sodales nisl non molestie. Praesent nec porttitor erat."
            >
              <img src={NoticiaImg} alt="Grafico em barras crescente" />
            </New>
          </div>
          <Button>
            <Link to="/noticias">Ver mais</Link>
          </Button>
        </section>

        <section id="parallax-section">
          <div className="bg-overlay" />
          <blockquote cite="https://www.pensador.com/frases_de_economia/2/">
            &quot;O que vai gerar a riqueza das nações é o fato de cada
            indivíduo procurar o seu desenvolvimento e crescimento econômico
            pessoal&quot; - Adam Smith
          </blockquote>
        </section>

        <section className="container" id="goal-section">
          <h2>Metas</h2>
          <div className="box-goals">
            <img src={MetaImg} alt="Pessoa empilhando blocos de madeira" />

            <div className="list-section">
              <Goal
                item="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas a metus ligula. Morbi eu lacinia lectus."
              />
              <Goal
                item="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas a metus ligula. Morbi eu lacinia lectus."
              />
              <Goal
                item="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas a metus ligula. Morbi eu lacinia lectus."
              />
              <Button>
                <Link to="/metas">Ver mais</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
