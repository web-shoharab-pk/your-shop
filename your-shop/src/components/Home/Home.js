import React, { useEffect, useState } from 'react';
import Products from '../Proucts/Products';
import './Home.css'

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://banana-pie-39331.herokuapp.com/products')
            .then(res => res.json())
            .then(product => {
                setProducts(product)
                setLoading(false)
            })
    }, [])


    return (
        <div className="home-container container mt-5" >
            {
                loading ? <button style={{ width: '150px' }} className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button> : ""
            }
            {
                products.map(product => <Products key={product._id} product={product} />)
            }
        </div>
    );
};

export default Home;