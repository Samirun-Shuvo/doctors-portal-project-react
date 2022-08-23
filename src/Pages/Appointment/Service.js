import React from "react";

const Service = ({ service, setTretment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl text-bold text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} avilable
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTretment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-sm text-white bg-gradient-to-r from-secondary to-primary"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
