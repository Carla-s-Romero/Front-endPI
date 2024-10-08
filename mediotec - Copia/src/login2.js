
import { 
  Footer,
  TitleCadastroLogin,
  decoracaoInfer,
  triangulo,
  Button,
  HeaderHome,
} from './imports/imports'; 



function Login() {

  return (
    <div className="login">
      <HeaderHome />
      <img src={triangulo} alt='decoracao' id='decInferior' />
      <TitleCadastroLogin 
        title="Olá, Seja bem-vindo!!"
        paragrafo="preencha os dados abaixo para realizar seu login"
      />

      <form action=''>
        <section className='forms-login'>

          <div className='forms-teste'>
          <label>E-mail:</label>
          <input type='email' id='email'  placeholder="Digite seu email" required></input>
          <br />
          <label id='labelSenha'>Senha:</label>
          <input type='password' id='password' placeholder="Digite sua senha" required></input>

          <a href='#a' id='EsquecSenha'>Esqueceu a senha?</a>

          <Button title="Finalizar"/>
          </div>
        </section>
      </form>

      <img src={decoracaoInfer} alt='decoracao' id='decInferior' />
      <Footer />
    </div>
  );
}

export default Login;

