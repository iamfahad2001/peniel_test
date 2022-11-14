import React from 'react';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import "./style.css";
const Banner5 =()  =>{
    return(
        <>
            <div className="banner5-section">
                <div className="container">
                   <div className="row align-items-lg-center">

                       <div className="col-md-4">
                           <div>
                               <div className="head1">
                                   <h1>Why choose</h1>
                               </div>
                               <div className="head2">
                                   <h1>Zoho CRM?</h1>
                               </div>
                           </div>
                       </div>

                       <div className="col-md-4">
                           <div className="list1">
                               <p> <TaskAltRoundedIcon color="primary"/> Refreshingly simple to use—a modern CRM for a modern business</p>
                               <p> <TaskAltRoundedIcon color="primary"/> Extensive developer platform for custom solutions and integrations</p>
                               <p> <TaskAltRoundedIcon color="primary"/> No hidden costs—we don't nickel and dime features and much more</p>

                           </div>
                       </div>

                       <div className="col-md-4">
                           <div className="list1">
                               <p> <TaskAltRoundedIcon color="primary"/> Dedicated programs for migration, deployment, training and testing</p>
                               <p> <TaskAltRoundedIcon color="primary"/> Flexible contracts with no lock-in periods when ever you want as you like</p>
                               <p> <TaskAltRoundedIcon color="primary"/> Price protection–get the best deal, always as you like thanks </p>

                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Banner5;