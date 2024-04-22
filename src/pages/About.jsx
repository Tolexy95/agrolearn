import React from 'react';
import AboutComponent from '../component/LandingPage/AboutComponent';


const AboutPage = () => {
  return (
    <div className="mt-28">
      <h1 className="text-3xl font-bold mb-4 text-center justify-center ">About Us</h1>

      <AboutComponent
        subtitle="Our Solution"
        description2="AgroHive, Africa’s fast growing human resource and workforce management agritech company, is boldly tackling one of the major challenges encountered by agri-food businesses across Africa, which is to have easy access to blended agricultural training, a consistent supply of appropriately trained agricultural workforce that meets their skills needs and a digital workforce management platform to manage and track the performance of their staff."
        description4="We collaborate with key stakeholders in the agricultural industry to train, upskill and certify agricultural talents. Once certified, agricultural talents are outsourced to agribusinesses through AgroHive’s digital hiring platform."
      />
    </div>
  );
};

export default AboutPage; 