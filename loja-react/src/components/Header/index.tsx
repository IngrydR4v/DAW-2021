import './style.css'

export function Header() {
    return (
        <header className="navbar navbar-expand navbar-light">
            <div className="container">
                <h1 className="navbar-brand">DAW 2021</h1>
                <nav>
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a className="nav-link active" href="#"> Home </a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#"> Produtos </a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#"> Sobre nós </a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#"> Contato </a> </li>

                    </ul>
                </nav>

            </div>
        </header>
    );
}