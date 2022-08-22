import React from "react";
import contact from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contact})`,
      }}
    >
      <div className="py-10">
        <div className="text-center">
          <h2 className="text-xl text-primary font-bold">Contact Us</h2>
          <h1 className="text-white text-3xl">Stay connected with us</h1>
        </div>
        <div className="form-control w-full max-w-xs mx-auto my-8">
          <input
            type="text"
            placeholder="Email address"
            className="input input-bordered w-full max-w-xs mb-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea className="textarea my-2" placeholder="Your Message"></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
