import React from 'react';

const DeleteProduct = ({ product }) => {

    const deleteProduct = id => {
        fetch(`https://banana-pie-39331.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully", result);
            })
    }
 
    return (
        <div>
            <div  style={{ backgroundColor: 'white' }} className="d-flex justify-content-between p-3">
                <p>{product.name}</p>
                <p>{product.weight}</p>
                <p>{product.price}</p>
                <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
        </div>

    );
};


export default DeleteProduct;