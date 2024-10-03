import './button.css'
export default function Botão({title, onClick, disabled}) {
    return(
      <div className='button-container'>
        <button id='button-cadastro'>
          {title}
          </button>
      </div>
    )
  };
  