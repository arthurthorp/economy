import React from 'react';

import Aside from '../components/Aside';
import New from '../components/New';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

import NoticiaImg from '../assets/img/noticia.jpg';
import MainImg from '../assets/img/noticia/noticia.jpg';

const News: React.FC = () => {
  return (
    <>
      <Aside page="noticias" />
      <main>
        <section className="container">
          <img
            src={MainImg}
            alt="Imagem de um homem segurando um jornal de notícias sobre negócios"
          />
        </section>
        <Breadcrumb page="Notícias" />
        <section className="container" id="section-news">
          <h1>Notícias</h1>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;
