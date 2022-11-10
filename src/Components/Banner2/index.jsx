import React from "react";
import './style.css';

const Banner2 = () => {
    return (

        <>
            {/*banner start*/}
            <div className="banner2-section">
                <div className="container">

                    <div className="banner2-text">
                        <p className="p-head">FOR HAPPIER CUSTOMERS</p>
                        <h1>Build excellent customer</h1>
                        <h1>relationships</h1>
                        <p>Engage with customers through the right channel at the right time and with the right message.
                            Harness </p>
                        <p>the power of omnichannel presence, segmentation, KPIs, predictive intelligence,
                            and more to deliver personalized experiences that breed loyalty.</p>
                    </div>
                    <div style={{display: "flex", position: "absolute", paddingTop:"90px"}}>

                        <div className="banner2-img1">
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-melinda-calling.svg"/>
                        </div>
                        <div className="banner2-img2">
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-twitter-reply.svg"/>
                        </div>
                    </div>
                    <div style={{position:"absolute"}}>
                        <img style={{width: "600px" ,marginLeft: "300px"}} src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-multichanel-man-2x.webp"/>
                    </div>




                </div>
            </div>
            {/*banner end*/}

        </>
    )
}

export default Banner2;