import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContaxt } from '../../App';
import './Checkout.css'

const Checkout = () => {
    const { order, userDetails } = useContext(UserContaxt);

    console.log(order);
    const history = useHistory();
    const confirmeOrder = orderDetails => {
        const details = {
            userName: userDetails.displayName,
            email: userDetails.email,
            productName: orderDetails.name,
            price: orderDetails.price,
            weight: orderDetails.weignt,
            date: (new Date().toDateString("dddd, mmmm, yyyy"))
        }
        console.log(details);
        fetch('https://banana-pie-39331.herokuapp.com/orderDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })

        if (order.price) {
            alert("YOUR ORDER IS CONFIRMED !! your total bill: " + order.price)
            history.push('/orders')
        }
        else {
            alert("please again order then checkout")
            history.push('/home')
        }

    }

    return (
        <div className="row mt-5">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <h2>Checkout Your Product</h2>
                <div className="checkOutBox p-3">
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Description</h3> <h3>Weight/Quantity</h3> <h3>Price</h3>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mt-5">
                        <h4>{order.name}</h4> <h4>{order.weight}</h4> <h4>{order.price}</h4>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button onClick={() => confirmeOrder(order)} className="btn btn-success">Confirme Order</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">

            </div>

        </div>
    );
};

export default Checkout;