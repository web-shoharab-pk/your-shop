import React, { useContext, useEffect, useState } from 'react';
import { UserContaxt } from '../../App';
import Info from '../Info/Info';
import './Orders.css'

const Orders = ()  => {
    const {userDetails  } = useContext(UserContaxt);
    const [orderInfo, setOrderInfo] = useState([])
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetch(`https://banana-pie-39331.herokuapp.com/orderDetailsInfo/${userDetails.email}`)
            .then(res => res.json())
            .then(info => {
                setLoading(false)
                setOrderInfo(info) 
            })
    },  [userDetails.email])
    
    return (
        <div className=" mt-5">

            <div className="row">
                <div className="col-md-3">

                </div>


                <h2>TOtal order: {orderInfo.length}</h2>
                {
                    loading ? <button style={{ width: '150px' }} className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button> : ""
                }
                <div className="d-flex infoHeader justify-content-around my-3 p-1">
                    <h3>Product Name</h3> <h3>OrderId</h3> <h3>Price</h3> <h3>Email</h3> <h3>Date</h3>
                </div>
                <hr />
                {
                    orderInfo.map(info => <Info    key={info._id} info={info} />)
                }
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Orders;