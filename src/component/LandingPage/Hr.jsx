import React, { useContext } from 'react'
import picture from '../../assets/two girls.jpg'
import picture2 from '../../assets/paw paw man.jpg'
import { GiPitchfork } from "react-icons/gi";
import { SideBarContext } from '../../context/SideBarProvider';


const Hr = () => {
    const { isNavOpen } = useContext(SideBarContext);
    return (
        <>
           
            <div className={`font-inter px-10 mt-36 flex flex-col lg:flex-row gap-5 mb-36 lg:gap-11 lg:p-10 relative`} style={{ zIndex: isNavOpen ? -1 : '0' }}>

            <img src="https://www.agrohive.co/assets/images/icons/about-bg-icon-1-1.png" className="absolute md:bottom-[-20%] bottom-[-10%] right-0" alt="" style={{ zIndex: isNavOpen ? -1 : '0' }}/>
                
                <div className="md:flex md:relative lg:items-start" style={{ zIndex: isNavOpen ? -1 : 'auto' }}>

                    <img src={picture} className="rounded-md lg:ml-24  " alt="" style={{ zIndex: isNavOpen ? -1 : 'auto' }} />

                    <div className='md:w-[520px] mt-5 md:mt-0 md:absolute md:top-[70%] md:left-[29%] lg:top-[40%] lg:left-0'>
                        <img
                            src={picture2}
                            style={{ zIndex: isNavOpen ? -1 : 'auto' }}
                            className="rounded-md"
                            alt=""
                        />
                    </div>
                </div>

                <div className='md:px-5 flex-1 lg:p-24 lg:ml-16'>
                    <h1 className='mt-9 font-semibold text-[#9ea5a2] md:mt-52 lg:mt-0 text-sm mb-3 tracking-[0.2em]' style={{ lineHeight: '1.3' }}>WELCOME TO AGROHIVE</h1>

                    <h2 className="text-2xl md:text-[35px] lg:text-[2.8rem] text-[#255946] font-semibold leading-loose" style={{ lineHeight: '1.3' }}>
                        Easy HR staffing for AgriBusinesses
                    </h2>

                    <p className='mt-6 text-[18px]  text-[#00cc3c] font-sora italic'>Africa's first AgriTech human resources and work force management company</p>


                    <div>
                        <p className='mt-6 text-base text-[#6e7673] tracking-widest' style={{ lineHeight: '1.9' }}>We assist thousands of agri-food businesses across Africa to upskill, hire & manage skilled and trusted agricultural workforces using technology. We know that increasing agricultural productivity and profitability starts with easy recruiting and managing a team of skilled and trusted agricultural experts.</p>


                        <p className='mt-5 text-base font-bold text-[#6c757d] mb-10'>Our goal is to simplify this process, while you focus on increasing your yields.</p>
                    </div>


                    <hr className='text-green-500 text-2xl' />

                    <div className='lg:flex lg:flex-row items-center lg:mt-8 mt-4'>

                        <div className='mt-10 lg:mt-0 flex items-center px-4 gap-4   '>
                            <GiPitchfork className='' />
                            <p className='text-[#176300] font-semibold text-2xl'>Agro Experts</p>
                        </div>

                        <div className='mt-6 lg:mt-0 lg:mb-0 mb-10 flex items-center px-4  gap-4'>
                            <GiPitchfork className='' />
                            <p className='text-[#176300] text-2xl font-semibold'>Professional farmers</p>
                        </div>

                    </div>

                    <hr className='mt-3 text-green-500 text-2xl  lg:mt-8 ' />

                    <div className='
                    flex flex-col  md:flex-row mt-4 md:mt-7' style={{ zIndex: isNavOpen ? -1 : '0' }}>
                        <button className='bg-[#00cc3c] hover:bg-[#176300] text-white text-xl px-4 w-52 py-6 rounded-md m-2 font-bold'>Hire experts</button>
                        <button className='bg-[#00cc3c] hover:bg-[#176300] text-white text-xl  px-4 w-56 py-6 rounded-md m-2 font-bold'>Apply as expert</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hr