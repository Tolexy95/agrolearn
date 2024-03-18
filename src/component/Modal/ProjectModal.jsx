import React from 'react';
// import { closeModal } from '../../redux/features/modalSlice';



const ProjectModal = ({ extraObject }) => {
    return (
        <div className='lg:max-w-[1800px]'>
            <h3 className="text-xl font-bold text-[#176300]">{extraObject.title}</h3>
           <div className='flex gap-5'>
           <img src={extraObject.imageUrl} alt={extraObject.title} className="rounded-md" />
            <p className='font-sora text-base tracking-wide text-[#6e7673]' style={{ lineHeight: '1.5' }}>{extraObject.content}</p>
           </div>
            
</div>

    );
};

export default ProjectModal;
