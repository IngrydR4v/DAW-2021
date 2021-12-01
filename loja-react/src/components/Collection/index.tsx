import './style.css'

export function Collection(){
    return(
        <div className="collection">
                <div className="card">
                    <img src="assets/images/collection1.jpg" alt="" />
                    <div className="card-body">
                        <h5> COLEÇÃO </h5>
                        <h4 className="personalizei"> FEMININA</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>
                <div className="card">
                    <img src="assets/images/collection2.jpg" alt="" />
                    <div className="card-body">
                        <h5> COLEÇÃO </h5>
                        <h4 className="personalizei"> VERÃO</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="assets/images/collection3.jpg" alt="" />
                    <div className="card-body">
                        <h5> COLEÇÃO </h5> 
                        <h4 className="personalizei"> OUTONO</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="assets/images/collection4.jpg" alt="" />
                    <div className="card-body">
                        <h5> COLEÇÃO </h5>
                        <h4 className="personalizei"> INVERNO</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

        </div>
    )
}