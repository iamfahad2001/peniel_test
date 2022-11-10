import React from "react";
import './style.css';

const Banner = () => {
    return (

        <>
            {/*banner start*/}
            <div className="banner-section">
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-md-6">
                            <div className="banner-text">
                                <h1>SUPERFAST WORK.</h1>
                                <h1>SUPERFAST GROWTH.</h1>
                                <p>Bring the very best out of your customer-facing teams with robust automation,
                                    comprehensive analytics, personalized solutions, and more.
                                    Sign up and get started in no time—the fastest implementation in the enterprise CRM market.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-form">
                                <form>

                                    <div className="my-2">
                                        <input type="text" placeholder="Full Name"/>
                                    </div><br/>
                                    <div className="my-2"><input type="text" placeholder="email"/></div><br/>
                                    <div className="my-2"><input type="text" placeholder="Password"/></div><br/>
                                    <div className="my-2"><input type="text" placeholder="+971"/></div><br/>

                                    <p style={{color:"white"}}>It looks like you‘re in the UNITED ARAB EMIRATES based on your IP.Change Country</p>
                                    <p style={{color:"white"}}>Your data will be stored in the US data center.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*banner end*/}

        </>
    )
}

export default Banner;