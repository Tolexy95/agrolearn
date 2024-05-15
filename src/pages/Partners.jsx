import React from 'react';

const PartnerPage = () => {
  return (
    <div className="dark:mt-20 dark:lg:mt-[108px] mt-28 ">
      <h1 className="text-[38px] font-bold uppercase  text-[#255946] text-center">
        Our Partners
      </h1>

      <div className="flex flex-col lg:flex-row mt-12  lg:space-x-20 pb-20 md:px-12 px-5">
        <div className="flex-1 ml-2 mb-10 font-inter">
          <h3 className='text-[#255946] text-3xl font-sora'>Become Our Partner</h3>

          <p className="leading-10 text-[18px] text-[#6E7673] md:text-[17px] pb-5 text-justify mt-3">To achieve our goals of assisting agri-food businesses with skilled talents and reliable HR workforce management solutions, we understand the importance of strong partnerships and we are always excited to collaborate with organizations, individuals and key stakeholders across the globe, in our drive to build Africa’s largest digital human resource and agri-food business workforce management platform.</p>

          <p className="leading-8 text-[18px] text-gray-800 md:text-[17px] text-justify mt-3">Are you interested in partnering with us? Kindly send us a message! We are always excited to collaborate with industry experts like you!</p>

        </div>

        <div className="">
          <img src="https://www.agrohive.co/assets/images/resources/agrohive-partnership-1.jpg" className=' rounded-md w-full lg:w-auto' alt="" />
        </div>
      </div>


      <h3 className="lg:text-[35px] text-2xl font-bold  text-[#255946] text-center font-sora">Our Finanacial Partners</h3>
      <div className='flex flex-col lg:flex-row justify-between mt-16 lg:h-16  md:px-12 px-5'>
        <img src="https://www.agrohive.co/assets/images/partners/partner_british_american_tobacco.png" alt="British American Tobacco"/>

        <img src="https://www.agrohive.co/assets/images/partners/partner_fcmb.png" alt="FCMB"/>

        <img src="https://www.agrohive.co/assets/images/partners/partner_new_nigeria_foundation.png" alt="New Nigeria Foundation"/>

        <img src="https://www.agrohive.co/assets/images/partners/partner_passion_incubator.png" alt="Passion Incubator"/>
      </div>

      <div className='mt-36 bg-[#f6f5f283]'>
        <h3 className="lg:text-[35px] pt-10 text-2xl font-bold  text-[#255946] text-center font-sora">Our Featured Stories</h3>

        <p className="text-sm uppercase font-bold tracking-wider  text-[#9ea5a2] text-center font-sora mt-3">These organisations featured our impact stories.</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-12 pb-12 gap-x-16 place-items-center gap-y-7'>
          <img src="https://www.agrohive.co/assets/images/partners/media-baobab.png" className='' alt="Baobab"  />
          <img src="https://www.agrohive.co/assets/images/partners/media-bella.png" alt="Bella Nija" className='w-48'/>
          <img src="https://www.agrohive.co/assets/images/partners/media-business-day.png" alt="Business Day" className=''/>
          <img src="https://www.agrohive.co/assets/images/partners/media-disrupt-africa.png" alt="Disrupt Africa" className='w-48' />
          <img src="https://www.agrohive.co/assets/images/partners/media-donor-of-africa.png" alt="Donor of Africa" className=''/>
          <img src="https://www.agrohive.co/assets/images/partners/media-leadingladies.png" alt="LeadingLadies" className='' />
          <img src="https://www.agrohive.co/assets/images/partners/media-nguvuAfrica.png" alt="Nguvu Africa" className=''/>
          <img src="https://www.agrohive.co/assets/images/partners/media-pDDA.png" alt="pDDA" className='w-24'/>
          <img src="https://www.agrohive.co/assets/images/partners/media-the-future-awards.png" alt="The Future Award" className='w-48'/>
          <img src="https://www.agrohive.co/assets/images/partners/media-the-guardian.png" alt="The Guardian" className='' />
        </div>

      </div>
    </div>
  );
};

export default PartnerPage;