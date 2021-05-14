import React from 'react';
import { Link } from 'react-router-dom';
import './Sitebar.css'
const Sidebar = () => {
    return (
        <div>
            <div className="sidenav">
                <Link to="/manageProduct">Manage Product</Link>
                <Link to="/addProduct">Add Product</Link>
                <Link to="#clients">Edit Product</Link>
            </div>
        </div>
    );
};

export default Sidebar;