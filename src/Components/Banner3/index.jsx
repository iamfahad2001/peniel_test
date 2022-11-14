import React from "react";
import './style.css';

const Banner3 = () => {
    return (

        <>
            {/*banner start*/}
            <div className="banner3-section">
                <div className="container">

                    <div className="banner3-text">
                        <p className="p-head">FOR A STREAMLINED WORK EXPERIENCE</p>
                        <h1>Maximum productivity with</h1>
                        <h1>minimum use</h1>
                        <p>Let's break the myth that CRMs are all about data entry. Zoho CRM is built to be used less. Automate </p>
                        <p >workflows, processes, campaigns, customer journeys, and more so that you can focus less on software and more on relationships.</p>
                    </div>
                    <div style={{display: "flex", position: "absolute", paddingTop:"220px"}}>

                        <div className="banner3-img1">
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-automation_workflow.svg"/>
                        </div>
                        <div className="banner3-img2">
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-zia.svg"/>
                        </div>
                    </div>
                    <div style={{position:"absolute"}}>
                        <img style={{width: "420px" ,marginLeft: "530px"}} src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-workflow_girl_2x.webp"/>
                    </div>
                    <div style={{position:"absolute"}}>
                        <img style={{width: "380px" ,marginLeft: "400px", marginTop:"450px"}} src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-workflow.svg" />
                    </div>
                </div>
            </div>
            {/*banner end*/}

        </>
    )
}

export default Banner3;