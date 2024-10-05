import{
    Header,
    decTitle,
    dec,
    Footer
} from '../src/imports/imports'

import './css/boletim.css'

function Boletim(){
    return(
        <div className="boletim">
            <Header />
            <img src={dec} alt="decoração quadrados e triangulos" id='decoracao'/>

            <section>
                <img src={decTitle} alt="triangulo" />
                    <h1>Boletim</h1>
            </section>

{/* 
            <Footer /> */}
        </div>
    );
}

export default Boletim;