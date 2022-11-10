import React from 'react';
import './Nav.css';

const Navbar = () => {
    return (
        <>

            <div className="Top-nav">
                <img src={require('../../assets/logo.png')} style={{height:"50px",paddingTop:"5px"}}/>
                <select >
                    <option>Bulletin</option>
                </select>
                <select>
                    <option>Resources</option>
                </select>
                <select>
                    <option>Customers</option>
                </select>
                <select>
                    <option>solutions</option>
                </select>
                <a >Pricing</a>
                <select>
                    <option>
                        features
                    </option>
                </select>





            </div>

        </>
    );
};

export default Navbar;
