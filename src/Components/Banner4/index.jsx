import React from "react";
import './style.css';

const Banner4 = () => {
    return (

        <>
            {/*banner start*/}
            <div className="banner4-section">
                <div className="container">
                    <div className="b4-h2"><h2>Sensational software for a sensible price.</h2></div>
                    <div className="button">
                        <button type="button" className="btn btn1">SIGN UP FOR FREE</button>
                        <button type="button" className="btn btn2">SEE ALL FEATURE</button>
                    </div>
                    <div className="b4">
                        <h3>FOR A SUCCESSFUL BUSINESS</h3>
                        <h1>Hyper-manage operations with rich analytics</h1>
                        <p>Make informed decisions with agility using Zoho CRM's advanced analytics tools. Derive actionable insights, create custom reports and dashboards, and measure operations in real time to drive growth in a sustainable manner</p>
                    </div>
                    <div className="flex-container">
                        <div>
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-individual_target.svg" alt="alt" style={{width:"350px"}}/>
                        </div>
                        <div>
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-region_wise_tracker.svg" alt="alt" style={{width:"250px"}}/>
                        </div>
                        <div>
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-team_performance.svg" alt="alt" style={{width:"250px"}}/>
                        </div>
                        <div>
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-revenue_share.svg" alt="alt" style={{width:"250px"}}/>
                        </div>

                    </div>
                    <div className="flex-container">
                        <div>
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-sales_reps_individual_arget.svg" alt="alt" style={{width:"550px"}}/>
                        </div>
                        <div>
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-recent_lead_generation.svg" alt="alt" style={{width:"650px"}}/>
                        </div>
                    </div>

                    <div className="b4">
                        <div className="b4-h3"><h3>FOR A PERSONALIZED IMPLEMENTATION</h3></div>
                        <h1>Customize, upscale, and deploy with ease</h1>
                        <p>Make informed decisions with agility using Zoho CRM's advanced analytics tools. Derive actionable insights, create custom reports and dashboards, and measure operations in real time to drive growth in a sustainable manner</p>
                    </div>
                        <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/zcrm-canvas.svg"/>
                    <div>
                    </div>
                </div>
            </div>
            {/*banner end*/}

        </>
    )
}

export default Banner4;