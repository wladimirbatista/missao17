import './style.css'

export default function Topo({alterarTema, ehTemaEscuro}) {

  return(
    <header className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
      <img className='logo' src="assets/logo.png" alt="logomarca"/>
      <button onClick= {alterarTema} className={ehTemaEscuro ? 'modo-escuro-btn' : 'modo-claro-btn'}>
        <img className='icones-light-dark' src={ehTemaEscuro ? 'assets/sun.png' : 'assets/moon.png'} alt='icones'/>
      </button>
    </header>
  )
}