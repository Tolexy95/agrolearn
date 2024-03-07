import React from 'react'
import picture from '../../assets/two girls.jpg'
import picture2 from '../../assets/paw paw man.jpg'
import { GiPitchfork } from "react-icons/gi";
import CustomButton from '../Button/CustomButton';


const Hr = () => {
  return (
    <div className=''>
        <div className='lg:flex'>
<div className="lg:relative">
  <img src={picture} className="w-[300px] ml-5 rounded-md lg:w-[600px] lg:ml-28 lg:m-4" alt="" />
  <img
    src={picture2}
    className="mt-6 w-[300px] ml-5 rounded-md lg:w-[400px] lg:items-end justify-end lg:absolute lg:top-[440px] lg:left-0"
    alt=""
  />
</div>
<div className=''>
<div className='mt-9 ml-4 font-semibold text-[#9ea5a2] lg:mt-48 lg:ml-44'>WELCOME TO AGROHIVE</div>
<div className='mt-4 px-4 text-5xl font-semibold text-green-700 lg:ml-40'>Easy HR staffing for AgriBusinesses</div>
<div>
    <p className='mt-6 px-4 text-xl font-Handlee-cursive text-green-500 lg:w-[430px] lg:ml-40'>Africans first AgriTech human resources and work force management company</p>

</div>
<div>
    <p className='mt-6 px-4 text-xl text-[#6e7673] w-[270px] lg:ml-40 lg:w-[650px]'>We assist thousands of agri-food businesses across Africa to upskill, hire & manage skilled and trusted agricultural workforces using technology. We know that increasing agricultural productivity and profitability starts with easy recruiting and managing a team of skilled and trusted agricultural experts.</p></div>
    <div>
        <p className='mt-5 px-4 text-lg font-bold text-[#6e7673] lg:ml-36 lg:px-9'>Our goal is to simplify this process, while you focus on increasing your yields.</p>
    </div>
    <div className=' lg:ml-40 '>
    <hr  className='mt-6 w-[300px] ml-4 lg:w-[550px] max-lg:mt-5 '/>
    <div className='lg:flex lg:flex-row lg:mt-8'>
    <div className='mt-3 flex px-4 gap-4   '>
    <GiPitchfork className='' />
        <p className='text-[#176300] font-semibold text-2xl'>Agro Experts</p>

    </div>
    <div className='mt-3 flex px-4  gap-4'>
    <GiPitchfork className='' />
        <p className='text-[#176300] text-2xl font-semibold'>Professional farmers</p>
    </div>
    </div>
    
    <hr  className='w-[300px] ml-4 mt-3 text-green-500 text-2xl lg:w-[550px] lg:mt-8 ' />
    <div className='flex flex-col mt-4 lg:flex-row lg:mt-5'>
            <button className='bg-[#00cc3c] text-white text-xl px-4 w-52 py-6 rounded-md m-2 font-bold'>Hire experts</button>
            <button className='bg-[#00cc3c] text-white text-xl  px-4 w-56 py-6 rounded-md m-2 font-bold'>Apply as expert</button> 
        </div>
    </div>
    
        </div>
        </div>
    </div>
    
    
  )
}

export default Hr