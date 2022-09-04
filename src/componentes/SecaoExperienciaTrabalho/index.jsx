import './style.css'

import Card from "../Card";

export default function SecaoExperienciaTrabalho({ehTemaEscuro}) {

  return (
    <section className={ehTemaEscuro ? 'secaoExperienciaDeTrabalho-modo-escuro' : 'secaoExperienciaDeTrabalho-modo-claro'} id='secaoExperienciaDeTrabalho'>
      <div className='container-texto'>
        <h2>Experiências de Trabalho</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus
        </p>
      </div>
      <div className='container-cards limitar-secao'>
        <Card
          ehTemaEscuro={ehTemaEscuro}
          data="JUNHO 2012 - 2016"
          titulo="UI/UX Designer"
          empresa="Adobe Inc."
          paragrafo="Lorem ipsum dolor sit amet, coectetur adpisicing elit, sed do eiusmod temp incididunt ut labore."
        />
        <Card
          ehTemaEscuro={ehTemaEscuro}
          data="AGOSTO 2016 - 2019"
          titulo="Product Designer"
          empresa="Adobe Inc."
          paragrafo="Lorem ipsum dolor sit amet, coectetur adpisicing elit, sed do eiusmod temp incididunt ut labore."
        />
        <Card
          ehTemaEscuro={ehTemaEscuro}
          data="FEVEREIRO 2019 - 2021"
          titulo="Graphic Designer"
          empresa="Adobe Inc."
          paragrafo="Lorem ipsum dolor sit amet, coectetur adpisicing elit, sed do eiusmod temp incididunt ut labore."
        />
      </div>
    </section>
  );
}
