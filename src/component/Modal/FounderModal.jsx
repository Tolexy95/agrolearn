import React, { useCallback } from 'react';
import { closeModal } from '../../redux/features/modalSlice';
import { useDispatch } from 'react-redux';


const FounderModal = () => {
    const dispatch = useDispatch();

    const handleCloseModal = useCallback(() => {
        dispatch(closeModal());
    }, [dispatch]);


    return (
        <div className="mb-12">
            <hr />
            <h1 className="text-4xl text-[#255946] font-semibold py-5 font-sora tracking-wide" >Founder's Note</h1>
            <div className='text-[#6e7673] text-base tracking-wide font-sora mb-6' style={{ lineHeight: '2' }}>

                <p >
                    Recently, Africa has witnessed an increase in the number of agri-food businesses being launched daily to meet the insatiable food demands of Africans and the globe at large. </p>

                <p className='mt-4'>Despite the growing number of agri-food businesses across the continent, data has shown that hundreds of agri-food businesses shut down operations daily across Africa due to low revenue and poor productivity.
                </p>

                <p className='mt-4'> Prior to launching AgroHive in 2016, we conducted research to identify the major contributor to poor productivity and profitability of agri-food businesses across the continent and it was disheartening to discover that the lack of updated agronomic knowledge and access to well skilled agriculture talents has affected the productivity and profitability of agri-food businesses even much more than access to finance.</p>

                <p className='mt-4'> AgroHive was founded with the goal of bridging the wide skills gap existing in the agricultural value chain, which is negatively contributing to lower grade agricultural production in Africa, leading to hunger and malnutrition.
                    With operations launching in Imo state, Nigeria, and now across multiple cities across Africa, We are excited to mention that AgroHive has given agri-food businesses an opportunity to confidently increase their productivity and profitability through its training, human resource and workforce management solutions.</p>

                <p className='mt-4'> We are also proud of the opportunities we have given to thousands of African youths and women in agriculture to upskill, access sustainable agri-food job opportunities and accelerate their careers in the agri-food sector. We aren’t just stopping with supporting agri-food businesses and talents to easily get trained, upskill and hire expert talents, we are working on digitizing all aspects of agriculture training, talent recruitment and workforce management to enable key players in the sector across Africa to conveniently access growth solutions for their agri-food businesses.</p>

            </div>

            <div className='mb-4'>
                <hr />
                <button className='mt-4 text-xl text-[#212529] font-normal float-right' onClick={handleCloseModal}>close</button>
            </div>

        </div>

    );
};

export default FounderModal;
