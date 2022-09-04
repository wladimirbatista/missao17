import './style.css'

export default function Card({ehTemaEscuro, data, titulo, empresa, paragrafo}) {
  
  return(
    <div className={ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'} id='card'>
      <p className='primeiroParagrafo'>{data}</p>
      <h4>{titulo}</h4>
      <p className='segundoParagrafo'>{empresa}</p>
      <p>{paragrafo}</p>
    </div>
  )
}