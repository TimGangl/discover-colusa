import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import '../BusinessPage/BusinessPage.css';

const BusinessPage = props => {
  const location = useLocation();

  const { src, alt, businessName, text, address, phone, hours, hours2, hours3, hours4, hours5, footer } = location.state;
  return (
    <>
      <div className="businessPageContainer">

        <div className="row mt-5">
          <div className="col-sm-2"></div>
          <div className="col-8"><h1 id="business" className="businessInfo">{businessName}</h1></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-0"></div>
          <div className="col-lg-4 col-md-6 mt-3">
            <p className="info">{text}</p>
            <p><a className="info" href={footer} target='_blank' rel="noreferrer">{footer}</a></p>
            <p className="info">{address}</p>
            <p className="info"><a className="info" href="tel:{phone}">{phone}</a></p>
            <p className="info mb-0">{hours}<br></br>{hours2}</p>
            <p className="info mt-0">{hours3}<br></br>{hours4}<br></br>{hours5}</p>
            <p classname="info m-0"></p>

          </div>

          <div className="col-lg-4 col-md-6 mt-5">
            <img className="business-img img-fluid" src={src} alt={alt}></img>
          </div>
          <div className="col-lg-2 col-md-0"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessPage;
