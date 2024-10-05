import './button.css'
export default function Botão({title, onClick, disabled}) {
    return(
      <div className='button-container'>
        <button id='button-cadastro' onClick={onClick} disabled={disabled}>
          {title}
          </button>
      </div>
    )
  };
  