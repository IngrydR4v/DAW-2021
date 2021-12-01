import './style.css'

export function Newsletter() {
    return (
        <div className="newsletter">
            <div className="container">
                <h2> Newsletter </h2>
                <p className="fw-light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id ipsa? Reiciendis ut iste illum aut eius
                    laudantium tempora totam,
                    fuga debitis harum. Laboriosam veniam quae rem incidunt reiciendis. Harum!</p>
                <form>
                    <input type="text" className="form-control form-control-lg" placeholder="Informe o seu email" />
                    <button className="btn btn-primary btn-lg"> Inscreva-se</button>
                </form>
            </div>
        </div>
    )
}