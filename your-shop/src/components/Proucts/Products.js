import React, {  useContext }  from 'react';
import { useHistory } from 'react-router';
import { UserContaxt } from '../../App'; 
import './Products.css'
 

const Products = ({ product }) => {
    const { setOrder} = useContext(UserContaxt);
    const location = useHistory()
 
//  console.log(order);
 
    const handleBuynowBtn =   id  => {   
       
       
            fetch(`https://banana-pie-39331.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data[0]);  
                location.replace('/checkout')
                      
            }) 
     
    }
 
 

    return (
        <div className=" p-1">
            <div className="card pd-card rounded">
                <img src={product.imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <h4 className="card-text"><span className="me-5">{product.weight}</span>  <span className="ms-5">{product.price}</span></h4>
                        <button onClick={() => handleBuynowBtn(product._id)} className="btn btn-success">BUY NOW</button>
                    </div>
            </div>
        </div>
    );
};
 
 
export default Products;