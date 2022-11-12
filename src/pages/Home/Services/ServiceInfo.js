import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const ServiceInfo = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-20 px-8">
            <img src={treatment} className='w-2/4 h-[458px] rounded-2xl' alt="Album" />
            <div className="card-body lg:w-1/2 ml-24">
                <div className="card-actions justify-start my-auto">
                    <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;