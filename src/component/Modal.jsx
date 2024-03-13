import React from 'react';

const Modal = ({ project, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-[300px] max-h-[600px] md:max-w-[750px] md:max-h-[500px] lg:max-w-[900px] lg:max-h-[500px] overflow-auto">
                <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#176300]">{project.title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="items-start">
                        <img src={project.imageUrl} alt={project.title} className="rounded-md" />
                    </div>
                    <div className="flex-1">
                        <p className='font-sora text-base tracking-wide text-[#6e7673]' style={{ lineHeight: '1.5' }}>{project.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
