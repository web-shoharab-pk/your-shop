import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const productData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price,
            weight: data.weight
        }
        const url = `https://banana-pie-39331.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => 
            console.log("server site response", res))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'e1f5a6095b7d9d00411e4c204ddebf7f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="row d-flex justify-content-center align-item-center">
            <div className="col-md-4">
                <Sidebar />
            </div>

            <div style={{ width: '100%' }} className="mt-5 col-md-4">
                <form className="px-5 py-3" onSubmit={handleSubmit(onSubmit)} >
                    <h4> Product Name </h4>
                    <input style={{ width: '80%' }} name="name" type="text" defaultValue="new product" ref={register} className="form-control" required />
                    <h4 className="mt-5"> Weight </h4>
                    <input style={{ width: '80%' }} name="weight" defaultValue="1 KG" ref={register} placeholder="Weight/Quantity" className="form-control" type="text" required />

                    <h4 className="mt-5"> Add Price </h4>
                    <input style={{ width: '80%' }} name="price" defaultValue="00" ref={register} placeholder="Price" className="form-control" type="text" required />

                    <h4 className="mt-5"> Add Photo </h4>
                    <input style={{ width: '80%' }} name="photo" className="form-control" onChange={handleImageUpload} type="file" required /> <br />
                    {errors.exampleRequired && < span > This field is required </span>}<br /><br />
                    <input className="btn btn-success" style={{ width: '80%' }} type="submit" />
                </form>

            </div>
            <div className="col-md-4">

            </div>
        </div>
    );
};

export default AddProduct;