import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableApointment = ({date}) => {
    const [services,setServices]= useState([]);
    const [tretment,setTretment]= useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <h4 className="text-center text-secondary text-xl my-8">Available Appointments on {format (date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    setTretment={setTretment}
                    ></Service>)
                }
            </div>
            {tretment && <BookingModal 
            date={date} 
            tretment={tretment}
            setTretment={setTretment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableApointment;