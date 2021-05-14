import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css'


import './Admin.css'

const Admin = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(products);
    useEffect(() => {
        fetch('https://banana-pie-39331.herokuapp.com/products')
            .then(res => res.json())
            .then(product => {
                setProducts(product)
                setLoading(false)
            })
    }, [])



    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-6">
                    {
                        loading ? <button style={{ width: '150px' }} className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                     Loading...
                     </button> : ""
                    }
                    <div className="allProducts mt-3 p-3">
                        <h1>TOtal Product: {products.length}</h1>
                        <div className="d-flex justify-content-between">
                            <h3>product name</h3>
                            <h3>product weight</h3>
                            <h3>product price</h3>
                        </div>
                        <hr />  
                        {
                            products.map(product => 
                                <div className="d-flex allProduct p-3 rounded justify-content-between align-items-center mt-3">
                                    <h4>{product.name}</h4>
                                    <h4>{product.weight}</h4>
                                    <h4>{product.price}</h4> 
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Admin;