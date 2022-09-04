import './style.css'

export default function SecaoBanner({ehTemaEscuro}) {

  return(
    <section className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'} id="secaoBanner">
      <div className='imagem-container'></div>
      <div className='texto-secaoBanner'>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  )
}