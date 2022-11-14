import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-dark text-start text-white">
        {/* Grid container */}
        <div className="container p-4">

          <section className>
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">EXPLORE CRM</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">CRM Essentials</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">CRM Alternatives</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">CRM foe Free</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">CRM for SMB</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Sales Pitch</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Sales Funnel</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Sales Pipeline</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Google Workspace CRM</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Social CRM</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Help Desk CRM</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">AI-Powered CRM</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Email Marketing CRM</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Sales Management Software</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Opportunity Management Software</a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">RESOURCES</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">What is CRM?</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Solutions and verticals</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Help Center</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Certified Consultants</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Customer Forum</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Release Notes</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Training</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">CRM Express - Blog</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">CRM for Enterprises</a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">GET STARTED</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Request Demo</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Why Zoho CRM</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Integrations</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Compare CRMs</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Compare Plans</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Awards & Titles</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Get Price Quote</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Contact Sales</a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        <section className="mb-4">
            {/* Facebook */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a className="btn btn-outline-light btn-floating m-1 fa fa-facebook" href="#!" role="button"><FacebookIcon/></a>
            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><InstagramIcon/></a>
            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><GoogleIcon/></a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><InstagramIcon/></a>
            {/* Linkedin */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><LinkedInIcon/></a>
            {/* Github */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><GitHubIcon/></a>
          </section>
        {/* Grid container */}
        <form action>
              {/*Grid row*/}
              <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-5 col-12">
                  {/* Email input */}
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" className="form-control" />
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-auto">
                  {/* Submit button */}
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Search
                  </button>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </form>
        {/* Copyright */}
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  )
}

export default Footer