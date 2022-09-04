import './style.css'

export default function Rodape({ehTemaEscuro}) {

  return(
    <footer className={ehTemaEscuro ? 'modo-escuro-rodape' : 'modo-claro-rodape'}>
      <img className='logo' src="assets/logo.png" alt="logomarca"/>
      <p className='paragrafo'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='icones'>
        <img src="assets/facebook.png" alt="facebook"/>
        <img src="assets/twitter.png" alt="twitter"/>
        <img src="assets/linkedin.png" alt="linkedin"/>
        <img src="assets/dribble.png" alt="dribble"/>
        <img src="assets/behance.png" alt="behance"/>
        <img src="assets/google-plus.png" alt="google plus"/>
      </div>
      <div className='copyright'>
        <p>Copyright 2022 &copy; <span>nome do desenvolvedor</span></p>
      </div>
    </footer>
  )
}