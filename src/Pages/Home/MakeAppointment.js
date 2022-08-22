import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-150px]" src={doctor} alt="" srcSet="" />
            </div>
            <div className="flex-1 p-10">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl text-white">Make an appointment Today</h2>
                <p className="mb-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam rem, labore soluta placeat totam commodi temporibus quasi qui doloribus tempore? Sit, rerum cupiditate! Ut eum numquam quidem? Atque, deleniti. Dolore fugiat doloribus id incidunt, aut sunt quaerat velit voluptates!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;