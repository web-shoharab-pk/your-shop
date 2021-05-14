import React from 'react';
import './Info.css'

const Info = ({ info }) => {
    return (
        <div className="mt-3">
            <div className="row">


                <div className="col-md-12">

                    <div className="d-flex justify-content-around mt-3 infoBox">
                        <h4>{info.productName}</h4> <h4>{info._id}</h4> <h4>{info.price}</h4> <h4>{info.email}</h4> <h4>{info.date}</h4>

                    </div>
                    <hr />
                </div>


            </div>
        </div>
    );
};

export default Info;