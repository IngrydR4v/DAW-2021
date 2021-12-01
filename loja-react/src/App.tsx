import axios from "axios";
import {useEffect, useState} from "react";
import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Newsletter } from "./components/NewsLetter";
import { Products } from "./components/Products";
import {Product} from "./@types";

function App() {
    const brands = [
        {alt: 'brand1', source: 'assets/images/brand1.png'},
        {alt: 'brand1', source: 'assets/images/brand2.png'},
        {alt: 'brand1', source: 'assets/images/brand3.png'},
        {alt: 'brand1', source: 'assets/images/brand4.png'},
        {alt: 'brand1', source: 'assets/images/brand5.png'},
        
    ]

    const [products, setProducts] = useState<Product[]>([] as Product[]);

    useEffect(() => {
        //TO DO: CARREGUE DO SERVER OS DADOS DE PRODUTOS
        axios.get('http://localhost:3333/products')
        .then(result => {
            setProducts(result.data);
        })
        .catch(error => {
            console.log('Puts!', error);
        })
    }, [])

    return (
        <div>

            <Header />

            <main>
                <div className="container">

                    <Collection />

                    <Products items={products}/>

                    <Newsletter />

                    <div className="container">

                    </div>
                </div>
            </main>

            <Footer />

        </div>
    );
}

export default App;

