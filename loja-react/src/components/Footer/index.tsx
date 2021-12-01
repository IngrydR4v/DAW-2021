import './style.css'

export function Footer(){
    return(
        <footer>
            <div className="container row">

                <div className="col">
                    <h5> CONTATO</h5>
                    <ul>
                        <li>+55 46 9 9817-3254</li>
                        <li>Rua Av. Brasil, 922</li>
                        <li>Pato Branco - PR</li>
                    </ul>
                </div>

                <div className="col">
                    <h5>INSTITUCIONAL</h5>
                    <ul>
                        <li> <a href="#"> Quem somos </a> </li>
                        <li> <a href="#"> Nossas lojas </a></li>
                        <li> <a href="#"> Pato Branco - PR </a> </li>
                        <li> <a href="#"> Pato Branco - PR </a> </li>
                    </ul>
                </div>

                <div className="col">
                    <h5>ATENDIMENTO</h5>
                    <ul>
                        <li> <a href="#"> Atendimento </a> </li>
                        <li> <a href="#"> Meus pedidos </a></li>
                        <li> <a href="#"> Devoluções </a> </li>
                        <li> <a href="#"> Assistência técnica </a></li>
                        <li> <a href="#"> Política de privacidade </a> </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}