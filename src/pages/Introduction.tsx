import React from 'react';

import Aside from '../components/Aside';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

import IntroducaoImg from '../assets/img/introducao/introducao-interna-desktop.jpg';

const Introduction: React.FC = () => {
  return (
    <>
      <Aside page="introducao" />
      <main id="introduction">
        <section className="container">
          <img
            src={IntroducaoImg}
            alt="Trilho de processamento de uma fábrica de sucos"
          />
        </section>
        <Breadcrumb page="Introdução" />
        <section className="container">
          <h1>Introdução</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at ex tortor. Etiam luctus nisl ac risus hendrerit luctus. Fusce nec
            ultricies dui, sed vulputate est. Maecenas tincidunt ultrices tortor
            vel malesuada. Aliquam erat volutpat. In quis dui eget tortor ornare
            eleifend. Phasellus sed libero ex. Aliquam mattis mauris vitae urna
            sagittis, sit amet rutrum neque aliquam. Nam vel iaculis est. Donec
            faucibus felis in ex dapibus, vel fermentum nisi convallis. Cras
            feugiat, massa porttitor finibus euismod, sapien sapien vehicula
            eros, sed posuere erat turpis dapibus dui. Nunc et mauris ut arcu
            tristique tristique non id lectus. Proin sit amet lorem et dolor
            venenatis sagittis non eget metus. Integer eget ipsum urna.
          </p>

          <p>
            Sed vulputate magna arcu, vitae mattis arcu pulvinar in. Etiam enim
            justo, blandit nec volutpat ut, feugiat et ex. Suspendisse in
            pulvinar felis. Aenean vel arcu vitae dui varius pharetra vel sit
            amet turpis. In sed tempus tellus, eu volutpat nisi. Mauris cursus
            nunc ex, non consectetur enim pharetra ac. Fusce non tincidunt
            augue, placerat hendrerit tortor. Sed convallis urna ut ullamcorper
            porttitor. Nullam imperdiet suscipit justo, id interdum lorem
            aliquam at.
          </p>

          <p>
            Mauris tincidunt justo at malesuada vehicula. Sed neque lorem,
            laoreet eu vehicula et, vehicula vel metus. Vestibulum risus lorem,
            pellentesque vitae massa eget, aliquam pulvinar ipsum. Nunc
            convallis est purus, sit amet imperdiet justo tristique ac.
            Curabitur molestie nisi vel nunc molestie molestie. In ac massa
            vitae risus accumsan sollicitudin. Cras placerat, magna vel vehicula
            rhoncus, odio nulla feugiat justo, in mollis libero odio non metus.
            Nullam interdum sed erat sed egestas. Nam a euismod felis. Nullam
            tempus non tellus et sollicitudin. Aliquam sed auctor ligula. Nulla
            sagittis, nisl vulputate efficitur imperdiet, dolor augue dictum
            metus, eu elementum arcu dolor quis tortor. Maecenas faucibus massa
            risus, ac ultricies magna pretium nec.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Introduction;
